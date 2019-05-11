const config = globalRequire('config');
const database = globalRequire('database');

module.exports = async () => {
    database.initConnection(config.database[config.nodeEnv]);
};
