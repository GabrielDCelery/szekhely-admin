exports.seed = async knex => {
    const dbName = 'address_locations';
    await knex(dbName).insert([]);

    await knex.raw(`select setval(\'${dbName}_id_seq\', max(id)) from ${dbName}`);
};