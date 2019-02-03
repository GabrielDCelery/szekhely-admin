'use strict';

const Model = require('./CustomModel');

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
        const NaturalPeople = require('./NaturalPeople');

        return {
            legal_entity_permanent_residence: {
                relation: Model.HasManyRelation,
                modelClass: LegalEntity,
                join: {
                    from: 'addresses.id',
                    to: 'legal_entities.permanent_residence_id'
                }
            },
            natural_people_permanent_residence: {
                relation: Model.HasManyRelation,
                modelClass: NaturalPeople,
                join: {
                    from: 'addresses.id',
                    to: 'natural_people.permanent_residence_id'
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