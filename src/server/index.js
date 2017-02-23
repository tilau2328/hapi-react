const hapi = require('hapi');
const mongoose = require('mongoose');

const server = new hapi.Server();

server.connection({ host: process.env.IP || 'localhost', port: process.env.PORT || 8080 });

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/hapi_react_graphql');

server.register(require('./plugins'), (err) => {
    if (err) { throw err; }
    server.route(require('./routes'));
    server.start((err) => {
        if (err) { throw err; }
        console.log(`Server running at: ${server.info.uri}`);
    });
});
