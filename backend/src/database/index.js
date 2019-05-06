const _ = require('lodash');
const config = require('config');
const { Container } = require('typedi');
const { Model, transaction } = require('objection');
const Knex = require('knex');
const knex = Knex(config.get(['knex', config.get('env')]));

Model.knex(knex);

const controllers = {
    Mails: Container.get(require('./controllers/mails/Mails')),
    MailSenderNames: Container.get(require('./controllers/mails/MailSenderNames'))
};

module.exports = {
    getKnex: () => {
        return knex;
    },
    execDBAction: (controllerName, methodName) => {
        const controller = controllers[controllerName];
        const methodToExecute = controller[methodName];

        return (...args) => {
            return transaction(Model.knex(), async transaction => {
                return methodToExecute(...args, transaction);
            });
        }
    }
}