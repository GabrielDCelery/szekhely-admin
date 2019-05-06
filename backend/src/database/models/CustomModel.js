'use strict';

const _ = require('lodash');
const { Model, QueryBuilder } = require('objection');

class CustomQueryBuilder extends QueryBuilder {
    async upsert(model = {}) {
        if (!model.id) {
            return this.insert(_.omit(model, 'id'));
        }

        const record = await this.updateAndFetchById(model.id, JSON.parse(JSON.stringify(_.omit(model, 'id'))));

        if (!record) {
            throw new Error('Could not find record!');
        }

        return record;
    }
}

class CustomModel extends Model {
    static get QueryBuilder() {
        return CustomQueryBuilder;
    }
}

module.exports = CustomModel;