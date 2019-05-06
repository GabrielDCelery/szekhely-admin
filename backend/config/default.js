'use strict';

require('dotenv').config();

module.exports = {
    env: process.env.NODE_ENV,
    knex: require('./children/knex')
}