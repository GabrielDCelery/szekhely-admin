const server = require('../../../../src/server');
const { getKnex, execDBAction } = globalRequire('database');

describe('AddressCities', () => {
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

        it('returns a city record by its id', async () => {
            const result = await execDBAction('AddressCities')('findOrCreate')({ id: 2 });

            expect(result).toEqual({
                "id": 2,
                "name": "Miskolc",
                "country_id": 1
            });
        });

        it('returns a city record by its name', async () => {
            const result = await execDBAction('AddressCities')('findOrCreate')({ name: 'Miskolc' });

            expect(result).toEqual({
                "id": 2,
                "name": "Miskolc",
                "country_id": 1
            });
        });

        it('creates a new city record if it does not exist', async () => {
            const result = await execDBAction('AddressCities')('findOrCreate')({
                name: 'Abaújszolnok',
                country_id: 1
            });

            expect(result).toEqual({
                "id": 7,
                "name": "Abaújszolnok",
                "country_id": 1
            });
        });

        it('throws an error if finds more than one records', async () => {
            try {
                await execDBAction('AddressCities')('findOrCreate')({ country_id: 1 });
            } catch ({ message, originalMessage }) {
                expect(message).toEqual('Sorry, something unexpected happened!');
                return expect(originalMessage).toEqual('Found more than one records in table address_cities -> {"country_id":1}');
            }

            throw new Error('Expected to throw!');
        });

        it('throws an error if trying to create a new city with impartial data', async () => {
            try {
                await execDBAction('AddressCities')('findOrCreate')({ name: 'Abaújszolnok' });
            } catch ({ message, originalMessage }) {
                expect(message).toEqual('Sorry, something unexpected happened!');
                return expect(originalMessage).toEqual('insert into "address_cities" ("name") values ($1) returning "id" - null value in column "country_id" violates not-null constraint');
            }

            throw new Error('Expected to throw!');
        });

        it('throws an error if trying to create a new city with non-existent country', async () => {
            try {
                await execDBAction('AddressCities')('findOrCreate')({
                    name: 'Abaújszolnok',
                    country_id: 22
                });
            } catch ({ message, originalMessage }) {
                expect(message).toEqual('Sorry, something unexpected happened!');
                return expect(originalMessage).toEqual('insert into "address_cities" ("country_id", "name") values ($1, $2) returning "id" - insert or update on table "address_cities" violates foreign key constraint "address_cities_country_id_foreign"');
            }

            throw new Error('Expected to throw!');
        });

        it('throws an error if trying to find a country where the id does not exist', async () => {
            try {
                await execDBAction('AddressCities')('findOrCreate')({ id: 22 });
            } catch ({ message, originalMessage }) {
                expect(message).toEqual('Sorry, something unexpected happened!');
                return expect(originalMessage).toEqual('Could not find record in table address_cities -> {"id":22}');
            }

            throw new Error('Expected to throw!');
        });
    });
});