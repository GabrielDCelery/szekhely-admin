const path = require('path');

module.exports = ({ DB_CLIENT, DB_USER, DB_HOST, DB_PASSWORD, DB_NAME, DB_CHARSET, DB_PORT }) => ({
    test: {
        client: DB_CLIENT,
        connection: {
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            charset: DB_CHARSET
        },
        migrations: {
            directory: path.join(__dirname + '../../database/migrations'),
        },
        seeds: {
            directory: path.join(__dirname + '../../database/seeds')
        }
    },
    development: {
        client: DB_CLIENT,
        connection: {
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            charset: DB_CHARSET
        },
        migrations: {
            directory: path.join(__dirname + '../../database/migrations'),
        }/*,
    seeds: {
      directory: __dirname + '/knex/seeds'
    }*/
    },
    staging: {
        client: DB_CLIENT,
        connection: {
            database: DB_NAME,
            user: DB_USER,
            password: DB_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
    production: {
        client: DB_CLIENT,
        connection: {
            database: DB_NAME,
            user: DB_USER,
            password: DB_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
});
