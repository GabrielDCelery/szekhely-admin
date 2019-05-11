const bodyParser = require('body-parser');
const config = globalRequire('config');
const api = globalRequire('api');
//const cors = require('cors');

module.exports = async app => {
    app.use(bodyParser.json());
    app.use(config.api.routerPathPrefix.test, api.router.test);
};
