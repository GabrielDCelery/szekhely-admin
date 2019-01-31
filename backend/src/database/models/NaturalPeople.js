'use strict';

const { Model } = require('objection');

class NatualPeople extends Model {
    static get tableName () {
        return 'natural_people';
    }
    
    static get jsonSchema () {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                first_name: { type: 'string' },
                last_name: { type: 'string' },
                is_service_provider: { type: 'boolean' },
                id_document_id: { type: 'integer' },
                official_address_id: { type: 'integer' },
                created_at: { type: 'string', format: 'date-time', readOnly: true },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static get relationMappings () {
        const Address = require('./Address');
        const IdDocument = require('./IdDocument');

        return {
            id_document: {
                relation: Model.HasOneRelation,
                modelClass: IdDocument,
                join: {
                    from: 'natural_people.id_document_id',
                    to: 'addresses.id'
                }
            },
            official_address: {
                relation: Model.HasOneRelation,
                modelClass: Address,
                join: {
                    from: 'natural_people.official_address_id',
                    to: 'id_documents.id'
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

module.exports = NatualPeople;