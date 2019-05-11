const config = globalRequire('config');
const database = globalRequire('database');

module.exports = async () => {
    database.initDB(config.database[config.nodeEnv]);
};
