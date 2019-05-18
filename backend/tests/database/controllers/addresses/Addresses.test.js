const server = require('../../../../src/server');
const { getKnex, execDBAction } = globalRequire('database');

describe('Addresses', () => {
    beforeAll(async done => {
        await server.start(done);
    });

    afterAll(async done => {
        await server.stop(done);
    });

    describe('findOrCreate', () => {
        it('returns a nested address record by its id', async () => {
            const result = await execDBAction('Addresses')('findOrCreate')({ id: 1 }, { bFlattenRecord: false });

            expect(result).toEqual({
                "id": 1,
                "location_id": 1,
                "address_line_1": "Miklós u. 13.",
                "address_line_2": "VIII/42.",
                "created_at": null,
                "updated_at": null,
                "location": {
                    "id": 1,
                    "postcode": "1033",
                    "city_id": 1,
                    "city": {
                        "id": 1,
                        "name": "Budapest",
                        "country_id": 1,
                        "country": {
                            "id": 1,
                            "name": "Hungary",
                            "short_name": "HU"
                        }
                    }
                }
            });
        });

        it('returns a flattened address record by its id', async () => {
            const result = await execDBAction('Addresses')('findOrCreate')({ id: 1 }, { bFlattenRecord: true });

            expect(result).toEqual({
                "id": 1,
                "location_id": 1,
                "postcode": "1033",
                "country_id": 1,
                "country_name": "Hungary",
                "country_short_name": "HU",
                "city_id": 1,
                "city_name": "Budapest",
                "address_line_1": "Miklós u. 13.",
                "address_line_2": "VIII/42.",
                "created_at": null,
                "updated_at": null
            });
        });
    });
});