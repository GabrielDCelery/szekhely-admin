const server = require('../../../../src/server');
const { getKnex, execDBAction } = globalRequire('database');

describe('AddressCountries', () => {
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

        it('returns a country record by its id', async () => {
            const result = await execDBAction('AddressCountries')('findOrCreate')({ id: 2 });

            expect(result).toEqual({
                "id": 2,
                "name": "Canada",
                "short_name": "CA"
            });
        });

        it('returns a country record by its long name', async () => {
            const result = await execDBAction('AddressCountries')('findOrCreate')({ name: 'Canada' });

            expect(result).toEqual({
                "id": 2,
                "name": "Canada",
                "short_name": "CA"
            });
        });

        it('returns a country record by its short name', async () => {
            const result = await execDBAction('AddressCountries')('findOrCreate')({ short_name: 'AL' });

            expect(result).toEqual({
                "id": 4,
                "short_name": "AL",
                "name": "Albania"
            });
        });

        it('returns a country record by its long name and short name', async () => {
            const result = await execDBAction('AddressCountries')('findOrCreate')({
                short_name: 'DZ',
                name: 'Algeria'
            });

            expect(result).toEqual({
                "id": 5,
                "short_name": "DZ",
                "name": "Algeria"
            });
        });

        it('creates a new country record if it does not exist', async () => {
            const result = await execDBAction('AddressCountries')('findOrCreate')({
                short_name: 'IN',
                name: 'India'
            });

            expect(result).toEqual({
                "id": 8,
                "short_name": "IN",
                "name": "India"
            });
        });

        it('throws an error if trying to create a new country with impartial data', async () => {
            try {
                await execDBAction('AddressCountries')('findOrCreate')({ name: 'India' });
            } catch ({ message, originalMessage }) {
                expect(message).toEqual('Sorry, something unexpected happened!');
                return expect(originalMessage).toEqual('insert into "address_countries" ("name") values ($1) returning "id" - null value in column "short_name" violates not-null constraint');
            }

            throw new Error('Expected to throw!');
        });

        it('throws an error if trying to find a country where te id does not exist', async () => {
            try {
                await execDBAction('AddressCountries')('findOrCreate')({ id: 22 });
            } catch ({ message, originalMessage }) {
                expect(message).toEqual('Sorry, something unexpected happened!');
                return expect(originalMessage).toEqual('Could not find record in table address_countries -> {"id":22}');
            }

            throw new Error('Expected to throw!');
        });
    });
});