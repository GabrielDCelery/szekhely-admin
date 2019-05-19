const dotenv = require('dotenv');
const api = require('./api');
const host = require('./host');
const database = require('./database');

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

class Config {
	constructor() {
		this.nodeEnv = process.env.NODE_ENV;
		this.host = host(process.env);
		this.api = api(process.env);
		this.database = database(process.env);
		this.isProductionEnv = this.isProductionEnv.bind(this);
	}

	isProductionEnv() {
		return this.nodeEnv === 'production';
	}
}

module.exports = new Config();
