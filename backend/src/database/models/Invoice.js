'use strict';

const { Model } = require('objection');

class Invoice extends Model {
    static get tableName () {
        return 'invoices';
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
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

module.exports = Invoice;