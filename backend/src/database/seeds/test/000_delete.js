exports.seed = async knex => {
    await knex('mail_senders').del();
    await knex('mail_sender_names').del();
    await knex('addresses').del();
    await knex('address_locations').del();
    await knex('address_cities').del();
    await knex('address_countries').del();
};