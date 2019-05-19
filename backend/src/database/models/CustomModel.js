'use strict';

const _ = require('lodash');
const { Model, QueryBuilder } = require('objection');

class CustomQueryBuilder extends QueryBuilder {
    async upsert(model = {}) {
        if (!model.id) {
            return this.insert(_.omit(model, 'id'));
        }

        const queryByString = JSON.stringify(_.omit(model, 'id'));
        const toUpdate = JSON.parse(queryByString);
        const record = _.size(toUpdate) === 0 ?
            await this.findById(model.id) :
            await this.updateAndFetchById(model.id, JSON.parse(queryByString));

        if (!record) {
            throw new Error(`Could not find record in table ${this.tableName()} -> ${queryByString}`);
        }

        return record;
    }

    async findOrCreate(model) {
        const records = await this.where(model);

        if (records.length === 0) {
            return this.insert(model);
        }

        if (records.length === 1) {
            return records[0];
        }

        throw new Error(`Found more than one records in table ${this.tableName()} -> ${JSON.stringify(model)}`);
    }
}

class CustomModel extends Model {
    static get QueryBuilder() {
        return CustomQueryBuilder;
    }
}

module.exports = CustomModel;