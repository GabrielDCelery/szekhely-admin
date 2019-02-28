'use strict';

const { transaction } = require('objection');

class Contracts {
    constructor (_models) {
        this.models = _models;
    }

    async addNewContract (_graph) {
        return transaction(this.models.Contract.knex(), async _transaction => {
            return this.models.Contract.query(_transaction).upsertGraphAndFetch(_graph).debug();
        });
    }
}

module.exports = Contracts;