'use strict';

exports.up = async _knex => {
    await _knex.schema.createTable('natural_people', _table => {
        _table.uuid('id').primary();
        _table.timestamps();
    });

    await _knex.schema.createTable('id_documents', _table => {
        _table.uuid('id').primary();
        _table.timestamps();
    });

    await _knex.schema.createTable('legal_entities', _table => {
        _table.uuid('id').primary();
        _table.timestamps();
    });

    await _knex.schema.createTable('emails', _table => {
        _table.uuid('id').primary();
        _table.string('address');
        _table.integer('status');
        _table.timestamps();
    });

    await _knex.schema.createTable('phones', _table => {
        _table.uuid('id').primary();
        _table.string('number');
        _table.integer('status');
        _table.timestamps();
    });

    await _knex.schema.createTable('addresses', _table => {
        _table.uuid('id').primary();
        _table.timestamps();
    });

    await _knex.schema.createTable('contracts', _table => {
        _table.uuid('id').primary();
        _table.uuid('client_id').references('id').inTable('legal_entities').onDelete('CASCADE');
        _table.uuid('client_signatory').references('id').inTable('natural_people').onDelete('CASCADE');
        _table.uuid('service_provider_id').references('id').inTable('legal_entities').onDelete('CASCADE');
        _table.uuid('service_provider_signatory').references('id').inTable('natural_people').onDelete('CASCADE');
        _table.date('start_date');
        _table.date('end_date');
        _table.timestamps();
    });
};

exports.down = async _knex => {
    await _knex.schema.dropTableIfExists('natural_people');
    await _knex.schema.dropTableIfExists('id_documents');
    await _knex.schema.dropTableIfExists('legal_entities');
    await _knex.schema.dropTableIfExists('emails');
    await _knex.schema.dropTableIfExists('phones');
    await _knex.schema.dropTableIfExists('addresses');
    await _knex.schema.dropTableIfExists('contracts');
};