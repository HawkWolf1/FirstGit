const http = require('http');

const routes = require('./routes2');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(4000);
