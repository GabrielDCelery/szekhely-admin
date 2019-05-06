'use strict';

const CustomModel = require('./CustomModel');

class MailSenderNames extends CustomModel {
    static get tableName () {
        return 'mail_sender_names';
    }

    static get jsonSchema () {
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

    $beforeInsert () {
        const date = new Date().toISOString();

        this.created_at = date;
        this.updated_at = date;
    }

    $beforeUpdate () {
        this.updated_at = new Date().toISOString();
    }
}

module.exports = MailSenderNames;