// server.js
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser)
server.use(middlewares);
server.use(router);
server.listen(3001, () => {
  console.log(`JSON Server is running on port ${3001}`);
});