'use strict';

const models = globalRequire('database/models');

class MailSenderNames {
    async upsert({ id, name }, transaction) {
        return models.MailSenderNames.query(transaction).upsert({ id, name });
    }
}

module.exports = MailSenderNames;