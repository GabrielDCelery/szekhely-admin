'use strict';

const { Model } = require('objection');

class Contract extends Model {
    static get tableName () {
        return 'contracts';
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                client_id: { type: 'integer' },
                client_signatory_id: { type: 'integer' },
                client_signatory_type: { type: 'integer' },
                service_provider_id: { type: 'integer' },
                service_provider_signatory_id: { type: 'integer' },
                service_provider_signatory_type: { type: 'integer' },
                documents_holder_name: { type: 'string' },
                documents_holder_address: { type: 'integer' },
                start_date: { type: 'string', format: 'date-time' },
                end_date: { type: 'string', format: 'date-time' },
                created_at: { type: 'string', format: 'date-time', readOnly: true },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static get relationMappings () {
        const LegalEntity = require('./LegalEntity');
        const NaturalPeople = require('./NaturalPeople');

        return {
            client: {
                relation: Model.BelongsToOneRelation,
                modelClass: LegalEntity,
                join: {
                    from: 'contracts.client_id',
                    to: 'legal_entities.id'
                }
            },
            client_signatory: {
                relation: Model.BelongsToOneRelation,
                modelClass: NaturalPeople,
                join: {
                    from: 'contracts.client_signatory_id',
                    to: 'natural_people.id'
                }
            },
            service_provider: {
                relation: Model.BelongsToOneRelation,
                modelClass: LegalEntity,
                join: {
                    from: 'contracts.service_provider_id',
                    to: 'legal_entities.id'
                }
            },
            service_provider_signatory: {
                relation: Model.BelongsToOneRelation,
                modelClass: NaturalPeople,
                join: {
                    from: 'contracts.service_provider_signatory_id',
                    to: 'natural_people.id'
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

module.exports = Contract;