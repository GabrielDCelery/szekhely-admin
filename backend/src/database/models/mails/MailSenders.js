'use strict';

const CustomModel = require('../CustomModel');

class MailSenders extends CustomModel {
    static get tableName() {
        return 'mail_senders';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                name_id: { type: 'integer' },
                address_id: { type: 'integer' }
            }
        };
    }

    static get relationMappings() {
        const { Addresses } = require('../addresses');
        const MailSenderNames = require('./MailSenderNames');

        return {
            address: {
                relation: CustomModel.BelongsToOneRelation,
                modelClass: Addresses,
                join: {
                    from: 'mail_senders.address_id',
                    to: 'addresses.id'
                }
            },
            name: {
                relation: CustomModel.BelongsToOneRelation,
                modelClass: MailSenderNames,
                join: {
                    from: 'mail_senders.name_id',
                    to: 'mail_sender_names.id'
                }
            }
        };
    }
}

module.exports = MailSenders;