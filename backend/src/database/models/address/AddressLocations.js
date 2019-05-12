'use strict';

const CustomModel = require('../CustomModel');

class AddressLocations extends CustomModel {
    static get tableName() {
        return 'address_locations';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                postcode: { type: 'string' },
                city_id: { type: 'integer' },
                country_id: { type: 'integer' }
            }
        };
    }

    static get relationMappings() {
        const AddressCities = require('./AddressCities');
        const AddressCountries = require('./AddressCountries');

        return {
            address_location_city: {
                relation: Model.BelongsToOneRelation,
                modelClass: AddressCities,
                join: {
                    from: 'address_locations.city_id',
                    to: 'address_cities.id'
                }
            },
            address_location_country: {
                relation: Model.BelongsToOneRelation,
                modelClass: AddressCountries,
                join: {
                    from: 'address_locations.country_id',
                    to: 'address_countries.id'
                }
            }
        };
    }
}

module.exports = AddressLocations;