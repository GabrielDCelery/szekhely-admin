'use strict';

const { Model } = require('objection');

class IdDocument extends Model {
    static get tableName () {
        return 'id_documents';
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                type: { type: 'integer' },
                number: { type: 'string' },
                external_storage_metadata: { type: 'object' },
                expiry_date: { type: 'string', format: 'date-time' },
                created_at: { type: 'string', format: 'date-time', readOnly: true },
                updated_at: { type: 'string', format: 'date-time' }
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

module.exports = IdDocument;