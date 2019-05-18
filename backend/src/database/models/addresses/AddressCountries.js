'use strict';

const CustomModel = require('../CustomModel');

class AddressCountries extends CustomModel {
    static get tableName () {
        return 'address_countries';
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                short_name: { type: 'string' }
            }
        };
    }

    static get relationMappings () {
        const AddressLocations = require('./AddressLocations');

        return {
            cities: {
                relation: CustomModel.HasManyRelation,
                modelClass: AddressLocations,
                join: {
                    from: 'address_countries.id',
                    to: 'address_locations.country_id'
                }
            }
        };
    }
}

module.exports = AddressCountries;