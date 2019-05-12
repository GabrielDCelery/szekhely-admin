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
        const Address = require('./address/Addresses');
        const Contract = require('./Contract');

        return {
            contract_client_signatory: {
                relation: Model.HasManyRelation,
                modelClass: Contract,
                join: {
                    from: 'natural_people.id',
                    to: 'contracts.client_signatory_id'
                }
            },
            contract_service_provider_signatory: {
                relation: Model.HasManyRelation,
                modelClass: Contract,
                join: {
                    from: 'natural_people.id',
                    to: 'contracts.service_provider_signatory_id'
                }
            },
            permanent_residence: {
                relation: Model.BelongsToOneRelation,
                modelClass: Address,
                join: {
                    from: 'natural_people.permanent_residence_id',
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

module.exports = NatualPeople;