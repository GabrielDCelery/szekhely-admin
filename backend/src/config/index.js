const dotenv = require('dotenv');
const api = require('./api');
const host = require('./host');
const database = require('./database');

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    nodeEnv: process.env.NODE_ENV,
    host: host(process.env),
    api: api(process.env),
    database: database(process.env)
};
