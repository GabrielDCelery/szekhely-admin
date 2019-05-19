'use strict';

const _ = require('lodash');
const models = globalRequire('database/models');

class AddressCountries {
    constructor() {
        this.findOrCreate = this.findOrCreate.bind(this);
    }

    async findOrCreate({ id, name, short_name }, { transaction }) {
        if (id) {
            const country = await models.AddressCountries.query(transaction).findById(id);

            if (!country) {
                throw new Error(`Could not find record in table ${models.AddressCountries.tableName} -> ${JSON.stringify({ id })}`);
            }

            return country;
        }

        return models.AddressCountries.query(transaction).findOrCreate(_.pickBy({ name, short_name }));
    }
}

module.exports = AddressCountries;