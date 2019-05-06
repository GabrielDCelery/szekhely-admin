'use strict';

exports.up = async knex => {
    await knex.schema.createTable('mail_sender_names', table => {
        table.increments('id').primary();
        table.string('name');
        table.timestamps();
        table.unique(['name']);
    });
    /*
    await knex.schema.createTable('natural_people', table => {
        table.increments('id').primary();
        table.string('first_name');
        table.string('last_name');
        table.boolean('is_service_provider');
        table.integer('id_document_id').references('id').inTable('id_documents');
        table.integer('permanent_residence_id').references('id').inTable('addresses');
        table.timestamps();
    });
    
    await knex.schema.createTable('id_documents', table => {
        table.increments('id').primary();
        table.integer('type');
        table.string('number');
        table.json('external_storage_metadata');
        table.date('expiry_date');
        table.timestamps();
    });

    await knex.schema.createTable('legal_entities', table => {
        table.increments('id').primary();
        table.string('name');
        table.integer('type');
        table.string('registration_id');
        table.string('tax_id');
        table.boolean('is_service_provider');
        table.integer('permanent_residence_id').references('id').inTable('addresses');
        table.timestamps();
        table.unique('tax_id');
    });

    await knex.schema.createTable('emails', table => {
        table.increments('id').primary();
        table.string('address');
        table.integer('status');
        table.timestamps();
    });

    await knex.schema.createTable('phones', table => {
        table.increments('id').primary();
        table.string('number');
        table.integer('status');
        table.timestamps();
    });

    await knex.schema.createTable('addresses', table => {
        table.increments('id').primary();
        table.string('postcode');
        table.string('country', 2);
        table.string('city');
        table.string('address_line_1');
        table.string('address_line_2');
        table.timestamps();
        table.unique(['postcode', 'country', 'city', 'address_line_1', 'address_line_2'])
    });

    await knex.schema.createTable('invoices', table => {
        table.increments('id').primary();
        table.timestamps();
    });

    await knex.schema.createTable('services', table => {
        table.increments('id').primary();
        table.string('name');
        table.boolean('is_active');
        table.timestamps();
    });

    await knex.schema.createTable('contracts_services', table => {
        table.integer('contract_id').references('id').inTable('contracts');
        table.integer('service_id').references('id').inTable('services');
        table.unique(['contract_id', 'service_id']);
    });

    await knex.schema.createTable('contracts', table => {
        table.increments('id').primary();
        table.integer('client_id').references('id').inTable('legal_entities');
        table.integer('client_signatory_id').references('id').inTable('natural_people');
        table.integer('client_signatory_type');
        table.integer('service_provider_id').references('id').inTable('legal_entities');
        table.integer('service_provider_signatory_id').references('id').inTable('natural_people');
        table.integer('service_provider_signatory_type');
        table.string('documents_holder_name');
        table.integer('documents_holder_address').references('id').inTable('addresses');
        table.integer('invoice_id').references('id').inTable('invoices');
        table.date('start_date');
        table.date('end_date');
        table.timestamps();
    });

    await knex.schema.createTable('contracts_contact_emails', table => {
        table.integer('contract_id').references('id').inTable('contracts');
        table.integer('email_id').references('id').inTable('emails');
        table.unique(['contract_id', 'email_id']);
    });

    await knex.schema.createTable('contracts_contact_phones', table => {
        table.integer('contract_id').references('id').inTable('contracts');
        table.integer('phone_id').references('id').inTable('phones');
        table.unique(['contract_id', 'phone_id']);
    });
    */
};

exports.down = async knex => {
    await knex.schema.dropTableIfExists('mail_sender_names');
    /*
    await knex.schema.dropTableIfExists('natural_people');
    await knex.schema.dropTableIfExists('id_documents');
    await knex.schema.dropTableIfExists('legal_entities');
    await knex.schema.dropTableIfExists('emails');
    await knex.schema.dropTableIfExists('phones');
    await knex.schema.dropTableIfExists('addresses');
    await knex.schema.dropTableIfExists('services');
    await knex.schema.dropTableIfExists('contracts');
    await knex.schema.dropTableIfExists('contracts_services');
    await knex.schema.dropTableIfExists('contracts_contact_emails');
    await knex.schema.dropTableIfExists('contracts_contact_phones');
    */
};