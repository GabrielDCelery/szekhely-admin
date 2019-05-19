'use strict';

const _ = require('lodash');
const models = globalRequire('database/models');

class AddressCities {
    async findOrCreate({ id, name, country_id }, { transaction }) {
        if (id) {
            const city = await models.AddressCities.query(transaction).findById(id);

            if (!city) {
                throw new Error(`Could not find record in table ${models.AddressCities.tableName} -> ${JSON.stringify({ id })}`);
            }

            return city;
        }

        return models.AddressCities.query(transaction).findOrCreate(_.pickBy({ name, country_id }));
    }
}

module.exports = AddressCities;