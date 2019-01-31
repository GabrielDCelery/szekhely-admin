'use strict';

const { transaction } = require('objection');

class Contracts {
    constructor (_models) {
        this.models = _models;
    }

    async addNewContract (_graph) {
        return transaction(this.models.Contract.knex(), async _transaction => {
            await this.models.Contract.query(_transaction).insertGraph(_graph).debug();
        });
    }
}

module.exports = Contracts;