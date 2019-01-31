'use strict';

// system dependencies

const _ = require('lodash');
const controllers = require('./controllers');

// extra dependencies for testing

const randomstring = require('randomstring');

//const isHex = require('is-hex');
//const CustomDbError = require('../helpers/CustomDbError');

const REG_EXP_UUID = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

const createTestEmail = () => {
    return `${randomstring.generate(16)}@gmail.com`;
};

const createTestName = () => {
    return randomstring.generate(16);
};

describe('Contracts controller', () => {
    const controller = controllers.get('contracts');

    describe('addNewContract ()', () => {
        test('adds a new contract', async () => {
            const _result = await controller.addNewContract({
                documents_holder_name: 'Gabriel',
                client: {
                    name: 'Foo',
                    type: 1,
                    registration_id: 'abcdef',
                    tax_id: 'abcdef',
                    is_service_provider: false,
                    permanent_residence: {
                        postcode: '1035'
                    }
                },
                client_signatory: {
                    first_name: 'Foo',
                    last_name: 'Bar',
                    permanent_residence: {
                        postcode: '1099'
                    }
                },
                service_provider: {
                    registration_id: 'ghijkl',
                    tax_id: 'ghijkl',
                    is_service_provider: true
                },
                service_provider_signatory: {
                    first_name: 'Bar',
                    last_name: 'Foo'
                }
            });

            expect(true).toBeTruthy();
        });
    });
});