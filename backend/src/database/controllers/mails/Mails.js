'use strict';

const MailSenderNames = require('./MailSenderNames');

class MailsController {
    constructor(container) {
        this.mailSenderNames = container.get(MailSenderNames);
    }
 
    async createSender(transaction) {
        await this.mailSenderNames.upsert({}, transaction)
    }
}

module.exports = MailsController;