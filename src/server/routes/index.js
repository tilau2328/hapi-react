const path = require('path');
const publicPath = path.join(__dirname, "..", "public");

const authRoutes = require('./auth');
const commentRoutes = require('./comments');

const staticHandler = {
  directory: {
    path: path.join(publicPath, "static"),
    redirectToSlash: true,
    index: true
  }
};

const indexHandler = { file: path.join(publicPath, "index.html") };

const staticRoute = {
  method: "GET",
  path: "/static/{param*}",
  handler: staticHandler,
  config: { auth: false }
};

const indexRoute = {
  method: "GET",
  path: "/",
  handler: indexHandler,
  config: { auth: false }
};

const usersRoute = {
  method: "GET",
  path: "/users",
  handler: { file: path.join(__dirname, '..', "users.json") },
  config: { auth: 'jwt' }
};

var routes = [ staticRoute, indexRoute, usersRoute ];
routes.push.apply(routes, commentRoutes);
routes.push.apply(routes, authRoutes);

module.exports = routes;
