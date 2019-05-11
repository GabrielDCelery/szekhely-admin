'use strict';

const MailSenderNames = require('./MailSenderNames');

class Mails {
    constructor(container) {
        this.mailSenderNames = container.get(MailSenderNames);
    }
 
    async createSender(transaction) {
        await this.mailSenderNames.upsert({}, transaction)
    }
}

module.exports = Mails;