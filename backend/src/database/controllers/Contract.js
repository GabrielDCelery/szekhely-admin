'use strict';

const { transaction } = require('objection');

class Contracts {
    constructor (_models) {
        this.models = _models;
    }

    async _upsertAddress () {

    }

    async addNewContract (_graph) {
        return transaction(this.models.Contract.knex(), async _transaction => {
            const _address = { 
                postcode: '1035',
                country: 'HU',
                city: 'Budapest',
                address_line_1: 'Miklos utca 13',
                address_line_2: 'something'
            };

            await this.models.Address.query(_transaction).insert(_address).whereNotExists(_address);
            await this.models.Address.query(_transaction).insert(_address).whereNotExists(_address);
            //await this.models.Address.query(_transaction).insertDuplicateUpdate(_address);
            //await this.models.Contract.query(_transaction).insertGraph(_graph).debug();
        });
    }
}

module.exports = Contracts;