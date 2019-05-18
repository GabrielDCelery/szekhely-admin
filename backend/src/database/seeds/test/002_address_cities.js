exports.seed = async knex => {
    const dbName = 'address_cities';

    await knex('address_cities').insert([{
        "id": 1,
        "name": "Budapest",
        "country_id": 1
    }, {
        "id": 2,
        "name": "Miskolc",
        "country_id": 1
    }, {
        "id": 3,
        "name": "Nagykanizsa",
        "country_id": 1
    }, {
        "id": 4,
        "name": "Székesfehérvár",
        "country_id": 1
    }, {
        "id": 5,
        "name": "Taksony",
        "country_id": 1
    }, {
        "id": 6,
        "name": "Veszprém",
        "country_id": 1
    }]);

    await knex.raw(`select setval(\'${dbName}_id_seq\', max(id)) from ${dbName}`);
};