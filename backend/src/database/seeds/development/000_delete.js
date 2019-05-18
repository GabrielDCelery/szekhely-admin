exports.seed = async knex => {
    await knex('addresses').del();
    await knex('address_locations').del();
    await knex('address_cities').del();
    await knex('address_countries').del();
    await knex('mail_sender_names').del();
};