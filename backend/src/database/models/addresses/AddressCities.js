'use strict';

const CustomModel = require('../CustomModel');

class AddressCities extends CustomModel {
    static get tableName() {
        return 'address_cities';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                county_id: { type: 'integer' }
            }
        };
    }

    static get relationMappings() {
        const AddressLocations = require('./AddressLocations');
        const AddressCountries = require('./AddressCountries');

        return {
            locations: {
                relation: CustomModel.HasManyRelation,
                modelClass: AddressLocations,
                join: {
                    from: 'address_cities.id',
                    to: 'address_locations.city_id'
                }
            },
            country: {
                relation: CustomModel.BelongsToOneRelation,
                modelClass: AddressCountries,
                join: {
                    from: 'address_cities.country_id',
                    to: 'address_countries.id'
                }
            }
        };
    }
}

module.exports = AddressCities;