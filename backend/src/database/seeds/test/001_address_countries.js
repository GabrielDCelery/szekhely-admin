exports.seed = async knex => {
    const dbName = 'address_countries';

    await knex(dbName).insert([{
        "id": 1,
        "short_name": "HU",
        "name": "Hungary"
    }, {
        "id": 2,
        "short_name": "CA",
        "name": "Canada"
    }, {
        "id": 3,
        "short_name": "AF",
        "name": "Afghanistan"
    }, {
        "id": 4,
        "short_name": "AL",
        "name": "Albania"
    }, {
        "id": 5,
        "short_name": "DZ",
        "name": "Algeria"
    }, {
        "id": 6,
        "short_name": "AS",
        "name": "American Samoa"
    }, {
        "id": 7,
        "short_name": "AD",
        "name": "Andorra"
    }]);

    await knex.raw(`select setval(\'${dbName}_id_seq\', max(id)) from ${dbName}`);
};