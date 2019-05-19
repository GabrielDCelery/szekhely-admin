const server = require('../../../../src/server');
const { getKnex, execDBAction } = globalRequire('database');
/*
const constantDate = new Date('2019-05-20T11:11:11');
*/
/*eslint no-global-assign:off*/
/*
Date = class extends Date {
	constructor() {
		return constantDate
	}
}
*/

describe('Addresses', () => {
    beforeAll(async done => {
        await server.start(done);
    });

    afterAll(async done => {
        await server.stop(done);
    });

    describe('findOrCreate', () => {
        beforeEach(async () => {
            await getKnex().seed.run();
        });
        
        it('returns a nested address record by its id', async () => {
            const result = await execDBAction('Addresses')('findOrCreate')({ id: 1 }, { bFlattenRecord: false });

            expect(result).toEqual({
                "id": 1,
                "location_id": 1,
                "address_line_1": "Miklós u. 13.",
                "address_line_2": "VIII/42.",
                "created_at": new Date('2019-11-11T11:11:11'),
                "updated_at": new Date('2019-11-11T11:11:11'),
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
                "created_at": new Date('2019-11-11T11:11:11'),
                "updated_at": new Date('2019-11-11T11:11:11')
            });
        });

        it('returns a flattened address record under different search conditions', async () => {
            const expected = {
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
                "created_at": new Date('2019-11-11T11:11:11'),
                "updated_at": new Date('2019-11-11T11:11:11')
            };

            expect(await execDBAction('Addresses')('findOrCreate')({
                postcode: '1033',
                country_name: 'Hungary',
                city_name: 'Budapest',
                address_line_1: 'Miklós u. 13.',
                address_line_2: 'VIII/42.'
            }, { bFlattenRecord: true })).toEqual(expected);

            expect(await execDBAction('Addresses')('findOrCreate')({
                postcode: '1033',
                country_short_name: 'HU',
                city_name: 'Budapest',
                address_line_1: 'Miklós u. 13.',
                address_line_2: 'VIII/42.'
            }, { bFlattenRecord: true })).toEqual(expected);

            expect(await execDBAction('Addresses')('findOrCreate')({
                postcode: '1033',
                country_id: 1,
                city_name: 'Budapest',
                address_line_1: 'Miklós u. 13.',
                address_line_2: 'VIII/42.'
            }, { bFlattenRecord: true })).toEqual(expected);

            expect(await execDBAction('Addresses')('findOrCreate')({
                postcode: '1033',
                country_id: 1,
                city_id: 1,
                address_line_1: 'Miklós u. 13.',
                address_line_2: 'VIII/42.'
            }, { bFlattenRecord: true })).toEqual(expected);
        });
        /*
        it('creates a new record', async () => {
            const expected = {
                "id": 6,
                "location_id": 3,
                "postcode": "8000",
                "country_id": 1,
                "country_name": "Hungary",
                "country_short_name": "HU",
                "city_id": 4,
                "city_name": "Székesfehérvár",
                "address_line_1": "Farkasvermi u. 30.",
                "address_line_2": null
            };

            expect(await execDBAction('Addresses')('findOrCreate')({
                postcode: '8000',
                country_name: 'Hungary',
                city_name: 'Székesfehérvár',
                address_line_1: 'Farkasvermi u. 30.',
                address_line_2: null
            }, { bFlattenRecord: true })).toEqual(expected);
        });
        */
    });
});