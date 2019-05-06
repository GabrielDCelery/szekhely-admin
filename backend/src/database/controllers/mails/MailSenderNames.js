'use strict';

const { MailSenderNames } = requireWrapper('src/database/models');

class MailSenderNamesController {
    async upsert({ id, name }, transaction) {
        return MailSenderNames.query(transaction).upsert({ id, name });
    }
}

module.exports = MailSenderNamesController;