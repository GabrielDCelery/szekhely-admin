'use strict';

const models = globalRequire('database/models');

class MailSenders {
    async findById({ id }, { transaction }) {
        const mailSender = await models.MailSenders
            .query(transaction)
            .findById(id)
            .eager('location.city.country');
    }
}

module.exports = MailSenders;