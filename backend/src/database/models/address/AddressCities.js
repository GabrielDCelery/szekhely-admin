'use strict';

const CustomModel = require('../CustomModel');

class AddressCountries extends CustomModel {
    static get tableName () {
        return 'address_cities';
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                long_name: { type: 'string' },
                short_name: { type: 'string' }
            }
        };
    }

    static get relationMappings () {
        const AddressLocations = require('./AddressLocations');

        return {
            address_location_city: {
                relation: Model.HasManyRelation,
                modelClass: AddressLocations,
                join: {
                    from: 'address_cities.id',
                    to: 'address_locations.city_id'
                }
            }
        };
    }
}

module.exports = AddressCountries;