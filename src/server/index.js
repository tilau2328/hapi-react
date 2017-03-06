const hapi = require('hapi');
const corsHeaders = require('hapi-cors-headers')
const mongoose = require('mongoose');

const hapi_jwt = require('./plugins/hapi-jwt');
const config = require('./config');
const server = new hapi.Server();

server.connection({
  host: config.host.ip,
  port: config.host.port
});

server.ext('onPreResponse', corsHeaders);

mongoose.Promise = global.Promise;
mongoose.connect(config.database.host);

server.register(require('./plugins'), (err) => {
    if (err) { throw err; }
    hapi_jwt.register(server);
    server.route(require('./routes'));
    server.start((err) => {
        if (err) { throw err; }
        console.log(`Server running at: ${server.info.uri}`);
    });
});
