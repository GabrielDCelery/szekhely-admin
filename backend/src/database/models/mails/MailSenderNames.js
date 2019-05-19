'use strict';

const CustomModel = require('../CustomModel');

class MailSenderNames extends CustomModel {
    static get tableName() {
        return 'mail_sender_names';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                created_at: {
                    type: 'string',
                    format: 'date-time',
                    readOnly: true
                },
                updated_at: {
                    type: 'string',
                    format: 'date-time'
                }
            }
        };
    }
}

module.exports = MailSenderNames;