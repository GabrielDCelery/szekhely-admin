'use strict';

exports.up = async _knex => {
    await _knex.schema.createTable('natural_people', _table => {
        _table.increments('id').primary();
        _table.string('first_name');
        _table.string('last_name');
        _table.boolean('is_service_provider');
        _table.integer('id_document_id').references('id').inTable('id_documents');
        _table.integer('official_address_id').references('id').inTable('addresses');
        _table.timestamps();
    });

    await _knex.schema.createTable('id_documents', _table => {
        _table.increments('id').primary();
        _table.integer('type');
        _table.string('number');
        _table.json('external_storage_metadata');
        _table.date('expiry_date');
        _table.timestamps();
    });

    await _knex.schema.createTable('legal_entities', _table => {
        _table.increments('id').primary();
        _table.string('registration_id');
        _table.string('tax_id');
        _table.boolean('is_service_provider');
        _table.integer('official_address_id').references('id').inTable('addresses');
        _table.timestamps();
        _table.unique('tax_id');
    });

    await _knex.schema.createTable('emails', _table => {
        _table.increments('id').primary();
        _table.string('address');
        _table.integer('status');
        _table.timestamps();
    });

    await _knex.schema.createTable('phones', _table => {
        _table.increments('id').primary();
        _table.string('number');
        _table.integer('status');
        _table.timestamps();
    });

    await _knex.schema.createTable('addresses', _table => {
        _table.increments('id').primary();
        _table.string('postcode');
        _table.string('country', 2);
        _table.string('city');
        _table.string('address_line_1');
        _table.string('address_line_2');
        _table.timestamps();
    });

    await _knex.schema.createTable('invoices', _table => {
        _table.increments('id').primary();
        _table.timestamps();
    });

    await _knex.schema.createTable('services', _table => {
        _table.increments('id').primary();
        _table.string('name');
        _table.boolean('is_active');
        _table.timestamps();
    });

    await _knex.schema.createTable('contracts_services', _table => {
        _table.integer('contract_id').references('id').inTable('contracts');
        _table.integer('service_id').references('id').inTable('services');
        _table.unique(['contract_id', 'service_id']);
    });

    await _knex.schema.createTable('contracts', _table => {
        _table.increments('id').primary();
        _table.integer('client_id').references('id').inTable('legal_entities');
        _table.integer('client_signatory_id').references('id').inTable('natural_people');
        _table.integer('client_signatory_type');
        _table.integer('service_provider_id').references('id').inTable('legal_entities');
        _table.integer('service_provider_signatory_id').references('id').inTable('natural_people');
        _table.integer('service_provider_signatory_type');
        _table.string('documents_holder_name');
        _table.integer('documents_holder_address').references('id').inTable('addresses');
        //_table.json('external_storage_metadata');
        _table.integer('invoice_id').references('id').inTable('invoices');
        _table.date('start_date');
        _table.date('end_date');
        _table.timestamps();
    });

    await _knex.schema.createTable('contracts_contact_emails', _table => {
        _table.integer('contract_id').references('id').inTable('contracts');
        _table.integer('email_id').references('id').inTable('emails');
        _table.unique(['contract_id', 'email_id']);
    });

    await _knex.schema.createTable('contracts_contact_phones', _table => {
        _table.integer('contract_id').references('id').inTable('contracts');
        _table.integer('phone_id').references('id').inTable('phones');
        _table.unique(['contract_id', 'phone_id']);
    });
};

exports.down = async _knex => {
    await _knex.schema.dropTableIfExists('natural_people');
    await _knex.schema.dropTableIfExists('id_documents');
    await _knex.schema.dropTableIfExists('legal_entities');
    await _knex.schema.dropTableIfExists('emails');
    await _knex.schema.dropTableIfExists('phones');
    await _knex.schema.dropTableIfExists('addresses');
    await _knex.schema.dropTableIfExists('services');
    await _knex.schema.dropTableIfExists('contracts');
    await _knex.schema.dropTableIfExists('contracts_services');
    await _knex.schema.dropTableIfExists('contracts_contact_emails');
    await _knex.schema.dropTableIfExists('contracts_contact_phones');
};