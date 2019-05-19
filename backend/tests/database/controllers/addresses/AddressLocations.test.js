const server = require('../../../../src/server');
const { getKnex, execDBAction } = globalRequire('database');

describe('AddressLocations', () => {
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

        it('returns a location record by its id', async () => {
            const result = await execDBAction('AddressLocations')('findOrCreate')({ id: 3 });

            expect(result).toEqual({
                "id": 3,
                "postcode": "8000",
                "city_id": 4
            });
        });

        it('returns a location record by postcode and city id', async () => {
            const result = await execDBAction('AddressLocations')('findOrCreate')({
                postcode: '3527',
                city_id: 2
            });

            expect(result).toEqual({
                "id": 4,
                "postcode": "3527",
                "city_id": 2
            });
        });

        it('creates a new location record if it does not exist', async () => {
            const result = await execDBAction('AddressLocations')('findOrCreate')({
                postcode: '2335',
                city_id: 5
            });

            expect(result).toEqual({
                "id": 5,
                "postcode": "2335",
                "city_id": 5
            });
        });

        it('throws an error if finds more than one records', async () => {
            try {
                await execDBAction('AddressLocations')('findOrCreate')({ city_id: 1 });
            } catch ({ message }) {
                return expect(message).toEqual('Found more than one records in table address_locations -> {"city_id":1}');
            }

            throw new Error('Expected to throw!');
        });
        
        it('throws an error if trying to create a new location with impartial data', async () => {
            try {
                await execDBAction('AddressLocations')('findOrCreate')({ postcode: '2335' });
            } catch ({ message }) {
                expect(message).toEqual('insert into "address_locations" ("postcode") values ($1) returning "id" - null value in column "city_id" violates not-null constraint');
            }

            try {
                await execDBAction('AddressLocations')('findOrCreate')({ city_id: 5 });
            } catch ({ message }) {
                return expect(message).toEqual('insert into "address_locations" ("city_id") values ($1) returning "id" - null value in column "postcode" violates not-null constraint');
            }

            throw new Error('Expected to throw!');
        });

        it('throws an error if trying to create a new city with non-existent city', async () => {
            try {
                await execDBAction('AddressLocations')('findOrCreate')({
                    postcode: '2335',
                    city_id: 22
                });
            } catch ({ message }) {
                return expect(message).toEqual('insert into "address_locations" ("city_id", "postcode") values ($1, $2) returning "id" - insert or update on table "address_locations" violates foreign key constraint "address_locations_city_id_foreign"');
            }

            throw new Error('Expected to throw!');
        });

        it('throws an error if trying to find a location where the id does not exist', async () => {
            try {
                await execDBAction('AddressLocations')('findOrCreate')({ id: 22 });
            } catch ({ message }) {
                return expect(message).toEqual('Could not find record in table address_locations -> {"id":22}');
            }

            throw new Error('Expected to throw!');
        });
    });
});