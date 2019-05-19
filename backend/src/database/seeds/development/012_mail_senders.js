exports.seed = async knex => {
    const dbName = 'mail_senders';

    await knex(dbName).insert([{
        "id": 1,
        "address_id": 1,
        "name_id": 1
    }, {
        "id": 2,
        "address_id": 1,
        "name_id": 2
    }, {
        "id": 3,
        "address_id": 2,
        "name_id": 4
    }, {
        "id": 4,
        "address_id": 3,
        "name_id": 9
    }]);

    await knex.raw(`select setval(\'${dbName}_id_seq\', max(id)) from ${dbName}`);
};