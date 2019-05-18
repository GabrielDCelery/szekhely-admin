const Knex = require('knex');
const { Model, transaction } = require('objection');
const { Container } = require('typedi');
const controllers = require('./controllers');
const { CustomDBError } = require('./helpers');

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

  execDBAction(controllerName) {
    const controller = controllers[controllerName];

    if (!controller) {
      throw new Error(`Could not find controller -> ${controllerName}`);
    }

    return methodName => {
      const methodToExecute = Container.get(controller)[methodName];

      if (!methodToExecute) {
        throw new Error(`Could not find method for controller ${controllerName} -> ${methodToExecute}`);
      }

      return (fields = {}, config = {}) => {
        return transaction(Model.knex(), async transaction => {
          return methodToExecute(fields, { ...config, transaction }).catch(({ message }) => {
            throw new CustomDBError(message);
          });
        });
      }
    }
  }
}

module.exports = new DB();
