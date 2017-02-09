const hapi = require('hapi');

const server = new hapi.Server();

server.connection({ host: process.env.IP || 'localhost', port: process.env.PORT || 8080 });

server.register(require('./plugins'), (err) => {
    if (err) { throw err; }
    server.route(require('./routes'));
    server.start((err) => {
        if (err) { throw err; }
        console.log(`Server running at: ${server.info.uri}`);
    });
});