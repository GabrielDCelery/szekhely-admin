'use strict';

const CustomModel = require('../CustomModel');

class Addresses extends CustomModel {
    static get tableName () {
        return 'addresses';
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                location_id: { type: 'integer' },
                address_line_1: { type: 'string' },
                address_line_2: { type: 'string' },
                created_at: { type: 'string', format: 'date-time', readOnly: true },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static get relationMappings () {
        const AddressLocations = require('./AddressLocations');

        return {
            location: {
                relation: CustomModel.BelongsToOneRelation,
                modelClass: AddressLocations,
                join: {
                    from: 'addresses.location_id',
                    to: 'address_locations.id'
                }
            }
        };
    }

    $beforeInsert () {
        const date = new Date().toISOString();

        this.created_at = date;
        this.updated_at = date;
    }

    $beforeUpdate () {
        this.updated_at = new Date().toISOString();
    }
}

module.exports = Addresses;