const server = require('../../src/server');
const { getKnex, execDBAction } = globalRequire('database');
const { truncateDB, seedDB } = require('../testHelpers');

describe('MailSenderNames', () => {
    beforeAll(async done => {
        await server.start(done);
    });

    afterAll(async done => {
        await server.stop(done);
    });

    describe('upsert', () => {
        beforeEach(async () => {
            await truncateDB(getKnex());
            await seedDB(getKnex());
        });

        it('creates a new record if "id" is not specified and record does not exist', async () => {
            const { id, name } = await execDBAction('MailSenderNames', 'upsert')({ name: 'Jane Doe' });

            expect(id).toEqual(11);
            expect(name).toEqual('Jane Doe');
        });

        it('returns a record if it exists with given "id"', async () => {
            const { id, name } = await execDBAction('MailSenderNames', 'upsert')({ id: 1 });

            expect(id).toEqual(1);
            expect(name).toEqual('John Doe');
        });

        it('updates a record if it exists with given "id" and "name" is specified', async () => {
            const { id, name } = await execDBAction('MailSenderNames', 'upsert')({ id: 1, name: 'Johnas Doe' });

            expect(id).toEqual(1);
            expect(name).toEqual('Johnas Doe');
        });

        it('throws an error if record with a given "id" does not exist', async () => {
            try {
                await execDBAction('MailSenderNames', 'upsert')({ id: 99999 });
            } catch ({ message }) {
                expect(message).toEqual('Database error!');

                return;
            }

            throw new Error('Expected to throw!');
        });

        it('throws an error if record with given "name" already exists', async () => {
            try {
                await execDBAction('MailSenderNames', 'upsert')({ name: 'John Doe' });
            } catch ({ message }) {
                expect(message).toEqual('Database error!');

                return;
            }

            throw new Error('Expected to throw!');
        });
    });
});