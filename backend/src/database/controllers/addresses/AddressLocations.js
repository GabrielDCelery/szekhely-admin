'use strict';

const _ = require('lodash');
const models = globalRequire('database/models');

class AddressLocations {
    async findOrCreate({ id, postcode, city_id }, { transaction }) {
        if (id) {
            const record = await models.AddressLocations.query(transaction).findById(id);

            if (!record) {
                throw new Error(`Could not find record in table ${models.AddressLocations.tableName} -> ${JSON.stringify({ id })}`);
            }

            return record;
        }

        return models.AddressLocations.query(transaction).findOrCreate(_.pickBy({ postcode, city_id }));
    }
}

module.exports = AddressLocations;