'use strict';

const graphQlBuilder = require('objection-graphql').builder;

const NaturalPeople = require('./models/NaturalPeople');
const IdDocument = require('./models/IdDocument');
const Address = require('./models/Address');

const graphQlSchema = graphQlBuilder()
    .model(NaturalPeople, { fieldName: 'natural_people', listFieldName: 'natural_people' })
    .model(IdDocument, { fieldName: 'id_document', listFieldName: 'id_documents' })
    .model(Address, { fieldName: 'address', listFieldName: 'addresses' })
    .build();

module.exports = graphQlSchema;