const path = require('path');
const publiPath = path.join(__dirname, "..", "public");

const staticHandler = { directory: { path: path.join(publiPath, "static"), redirectToSlash: true, index: true } };
const indexHandler = { file: path.join(publiPath, "index.html") };

const staticRoute = { method: "GET", path: "/static/{param*}", handler: staticHandler };
const indexRoute = { method: "GET", path: "/", handler: indexHandler };
const todosRoute = { method: "GET", path: "/todos", handler: indexHandler };

var routes = [ staticRoute, indexRoute, todosRoute ];

module.exports = routes;
