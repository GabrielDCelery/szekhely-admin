'use strict';

const { Model, QueryBuilder } = require('objection');

class MyQueryBuilder extends QueryBuilder {


    insertDuplicateUpdate (_model) {
        const _insert = this.insert(_model).toString();
        const _update = this.update(_model).toString().replace(/^update .* set /i, '');

        return this.execute(`${_insert} ON DUPLICATE KEY UPDATE ${_update}`);

        return this.execute(this.insert(_model).toString().replace(/^insert/i, 'insert or ignore'));
    }
}

class CustomModel extends Model {
    static get QueryBuilder() {
        return MyQueryBuilder;
    }
}

module.exports = CustomModel;