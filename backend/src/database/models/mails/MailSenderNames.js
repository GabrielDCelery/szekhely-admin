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
                name: { type: 'string' }
            }
        };
    }

    static get relationMappings() {
        const MailSenders = require('./MailSenders');

        return {
            mail_senders: {
                relation: CustomModel.HasManyRelation,
                modelClass: MailSenders,
                join: {
                    from: 'mail_sender_names.id',
                    to: 'mail_senders.name_id'
                }
            }
        };
    }
}

module.exports = MailSenderNames;