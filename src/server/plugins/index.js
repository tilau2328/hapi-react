var plugins = [];

plugins.push(require('inert'));
plugins.push(require('./graphql'));
plugins.push(require('./graphiql'));

module.exports = plugins;
