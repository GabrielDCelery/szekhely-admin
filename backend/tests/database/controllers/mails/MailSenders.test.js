const server = require('../../../../src/server');
const { getKnex, execDBAction } = globalRequire('database');

describe('MailSenders', () => {
	beforeAll(async done => {
		await server.start(done);
	});

	afterAll(async done => {
		await server.stop(done);
	});

	describe('test', () => {
		beforeEach(async () => {
			await getKnex().seed.run();
		});

		it('does something', async () => {
			expect(true).toEqual(true);
		});
	});
});