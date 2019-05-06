require('../../initGlobalExtensions');

const { getKnex } = requireWrapper('src/database');

const tableNames = [
    'mail_sender_names'
];

module.exports = {
    truncateDB: async () => {
        const knex = getKnex();

        const promises = tableNames.map(async tableName => {
            await knex.raw(`DELETE FROM "${tableName}";`);
            await knex.raw(`DELETE FROM sqlite_sequence WHERE name="${tableName}";`);
        });

        return Promise.all(promises);
    },
    seedDB: async () => {
        const knex = getKnex();

        const promises = tableNames.map(async tableName => {
            return knex(tableName).insert(require(`./seeds/${tableName}`));
        });

        return Promise.all(promises);
    }
}