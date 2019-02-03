'use strict';

const { Model } = require('objection');
const Knex = require('knex');
const config = require('config');
const _ = require('lodash');

const knex = Knex(config.get(['knex', process.env.NODE_ENV]));

Model.knex(knex);

// Controllers

const ControllerContract = require('./Contract');
const ControllerAddress = require('./Address');

// Models

const ModelContract = require('../models/Contract');
const NaturalPeople = require('../models/NaturalPeople');
const LegalEntity = require('../models/LegalEntity');
const ModelAddress = require('../models/Address');

// Controller Initialization

const controllerAddress = new ControllerAddress({
    Address: ModelAddress
});

const controllerContract = new ControllerContract({
    Contract: ModelContract
});

const CONTROLLERS = {
    contract: new ControllerContract({
        Contract: ModelContract,
        Address: ModelAddress
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