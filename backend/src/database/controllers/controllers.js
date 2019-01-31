'use strict';

const { Model } = require('objection');
const Knex = require('knex');
const config = require('config');
const _ = require('lodash');

const knex = Knex(config.get(['knex', process.env.NODE_ENV]));

Model.knex(knex);

// Controllers

const Contracts = require('./Contracts');

// Models

const Contract = require('../models/Contract');
const NaturalPeople = require('../models/NaturalPeople');
const LegalEntity = require('../models/LegalEntity');

// Controller Initialization

const CONTROLLERS = {
    contracts: new Contracts({
        Contract: Contract,
        NaturalPeople: NaturalPeople
    })
};

// Controller getter

const get = _name => {
    const _controller = _.get(CONTROLLERS, _name, null);

    if (!_controller) {
        throw new Error(`Tried to get non-existent controller -> ${_name}`);
    }

    return _controller;
};

module.exports = {
    get: get
};