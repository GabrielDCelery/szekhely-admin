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
                city_id: { type: 'integer' }
            }
        };
    }

    static get relationMappings() {
        const AddressCities = require('./AddressCities');

        return {
            city: {
                relation: CustomModel.BelongsToOneRelation,
                modelClass: AddressCities,
                join: {
                    from: 'address_locations.city_id',
                    to: 'address_cities.id'
                }
            }
        };
    }
}

module.exports = AddressLocations;