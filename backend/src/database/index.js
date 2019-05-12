const Knex = require('knex');
const { Model, transaction } = require('objection');
const { Container } = require('typedi');
const controllers = require('./controllers');
const { customDBErrorHandler } = require('./helpers');

class DB {
  constructor() {
    this.knex = null;
    this.initialized = false;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.getKnex = this.getKnex.bind(this);
    this.execDBAction = this.execDBAction.bind(this);
  }

  start(config) {
    if (this.initialized) {
      throw new Error('Tried to initialize the database twice!');
    }

    this.knex = Knex(config);
    Model.knex(this.knex);
    this.initialized = true;
  }

  stop() {
    this.knex.destroy();
    this.initialized = false;
  }

  getKnex() {
    return this.knex;
  }

  execDBAction(controllerName, methodName) {
    const controller = Container.get(controllers[controllerName]);
    const methodToExecute = controller[methodName];

    return (...args) => {
      return transaction(Model.knex(), async transaction => {
        return methodToExecute(...args, transaction).catch(customDBErrorHandler);
      });
    }
  }
}

module.exports = new DB();
