const express = require('./express');
const database = require('./database');

module.exports = async app => {
    await express(app);
    await database();
};
