'use strict';

const { Model } = require('objection');

class Address extends Model {
    static get tableName () {
        return 'addresses';
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                postcode: { type: 'string' },
                country: { type: 'string' },
                city: { type: 'string' },
                address_line_1: { type: 'string' },
                address_line_2: { type: 'string' },
                created_at: { type: 'string', format: 'date-time', readOnly: true },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static get relationMappings () {
        const LegalEntity = require('./LegalEntity');

        return {
            official_legal_entity_address: {
                relation: Model.BelongsToOneRelation,
                modelClass: LegalEntity,
                join: {
                    from: 'legal_entities.official_address_id',
                    to: 'addresses.id'
                }
            }
        };
    }

    $beforeInsert () {
        const _date = new Date().toISOString();

        this.created_at = _date;
        this.updated_at = _date;
    }

    $beforeUpdate () {
        this.updated_at = new Date().toISOString();
    }
}

module.exports = Address;