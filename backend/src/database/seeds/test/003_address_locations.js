exports.seed = async knex => {
    const dbName = 'address_locations';

    await knex(dbName).insert([{
        "id": 1,
        "postcode": "1033",
        "city_id": 1
    }, {
        "id": 2,
        "postcode": "1054",
        "city_id": 1
    }, {
        "id": 3,
        "postcode": "8000",
        "city_id": 4
    }, {
        "id": 4,
        "postcode": "3527",
        "city_id": 2
    }]);

    await knex.raw(`select setval(\'${dbName}_id_seq\', max(id)) from ${dbName}`);
};