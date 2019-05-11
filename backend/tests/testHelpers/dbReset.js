const tableNames = [
    'mail_sender_names'
];

module.exports = {
    truncateDB: async (knex) => {
        const promises = tableNames.map(async tableName => {
            //await knex.raw(`DELETE FROM "${tableName}";`);
            await knex.raw(`TRUNCATE TABLE "${tableName}" RESTART IDENTITY;`);
        });

        await Promise.all(promises);
        console.log('---------------------truncateDB')
    },
    seedDB: async (knex) => {
        const promises = tableNames.map(async tableName => {
            return knex(tableName).insert(require(`./seeds/${tableName}`));
        });

        await Promise.all(promises);
        console.log('---------------------seedDB')
    }
}