'use strict';

const _ = require('lodash');
const models = globalRequire('database/models');

class AddressCountries {
    async findOrCreate({ id, name, short_name }, { transaction }) {
        if (id) {
            const record = await models.AddressCountries.query(transaction).findById(id);

            if (!record) {
                throw new Error(`Could not find record in table ${models.AddressCountries.tableName} -> ${JSON.stringify({ id })}`);
            }

            return record;
        }

        return models.AddressCountries.query(transaction).findOrCreate(_.pickBy({ name, short_name }));
    }
}

module.exports = AddressCountries;