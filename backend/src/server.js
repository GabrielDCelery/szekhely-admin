global.globalRequire = path => {
    return require(`${__dirname}/${path}`);
};

const express = require('express');
const loaders = require('./loaders');
const config = require('./config');
const database = require('./database');

let server = null;

const start = async (callback = () => { }) => {
    const app = express();

    await loaders(app);

    server = app.listen(config.host.port, error => {
        if (error) {
            return process.exit(1);
        }

        callback();

        console.log(`Running app on PORT:${config.host.port}`);
    });
}

const stop = async (callback = () => { }) => {
    database.destroyConnection();
    server.close();
    callback();
}

module.exports = {
    start: start,
    stop: stop
};