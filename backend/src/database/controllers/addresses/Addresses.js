'use strict';

const models = globalRequire('database/models');
const AddressCountries = require('./AddressCountries');
const AddressCities = require('./AddressCountries');
const AddressLocations = require('./AddressCountries');

class Addresses {
    constructor(container) {
        this.addressCountries = container.get(AddressCountries);
        this.addressCities = container.get(AddressCities);
        this.addressLocations = container.get(AddressLocations);
        this.findOrCreate = this.findOrCreate.bind(this);
    }

    async findOrCreate({
        id,
        postcode,
        address_line_1,
        address_line_2,
        location_id,
        city_id,
        city_name,
        country_id,
        country_name,
        country_short_name
    }, {
        bFlattenRecord,
        transaction
    }) {
        if (id) {
            const record = await models.Addresses.query(transaction).findById(id).eager('location.city.country');

            if (!record) {
                throw new Error(`Could not find record in table ${models.Address.tableName} -> ${JSON.stringify({ id })}`);
            }

            return bFlattenRecord ? Addresses.flattenRecord(record) : record;
        }

        const country = await this.addressCountries.findOrCreate({
            id: country_id,
            name: country_name,
            short_name: country_short_name
        }, transaction);

        const city = await this.addressCities.findOrCreate({
            id: city_id,
            name: city_name,
            country_id: country.id
        }, transaction);

        const location = await this.addressLocations.findOrCreate({
            id: location_id,
            postcode: postcode,
            city_id: city.id
        }, transaction);

        return models.Addresses
            .query(transaction)
            .findOrCreate(_.pickBy({
                id: id,
                location_id: location.id,
                address_line_1: address_line_1,
                address_line_2: address_line_2
            }));
    }

    static flattenRecord(record) {
        return {
            id: record.id,
            location_id: record.location.id,
            postcode: record.location.postcode,
            city_id: record.location.city.id,
            city_name: record.location.city.name,
            country_id: record.location.city.country.id,
            country_name: record.location.city.country.name,
            country_short_name: record.location.city.country.short_name,
            address_line_1: record.address_line_1,
            address_line_2: record.address_line_2,
            created_at: record.created_at,
            updated_at: record.updated_at
        };
    }
}

module.exports = Addresses;