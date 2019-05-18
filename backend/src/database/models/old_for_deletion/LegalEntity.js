'use strict';

const { Model } = require('objection');

class LegalEntity extends Model {
    static get tableName () {
        return 'legal_entities';
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                type: { type: 'integer' },
                registration_id: { type: 'string' },
                tax_id: { type: 'string' },
                is_service_provider: { type: 'boolean' },
                official_address_id: { type: 'integer' },
                created_at: { type: 'string', format: 'date-time', readOnly: true },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static get relationMappings () {
        const Contract = require('./Contract');
        const Address = require('../address/Addresses');

        return {
            contract_client: {
                relation: Model.HasManyRelation,
                modelClass: Contract,
                join: {
                    from: 'legal_entities.id',
                    to: 'contracts.client_id'
                }
            },
            contract_service_provider: {
                relation: Model.HasManyRelation,
                modelClass: Contract,
                join: {
                    from: 'legal_entities.id',
                    to: 'contracts.service_provider_id'
                }
            },
            permanent_residence: {
                relation: Model.BelongsToOneRelation,
                modelClass: Address,
                join: {
                    from: 'legal_entities.permanent_residence_id',
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

module.exports = LegalEntity;