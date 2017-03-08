const controllers = require('../handlers/comments');

const getComments = { method: "GET", path: "/comments", handler: controllers.getComments, config: { auth: 'jwt' } };
const createComment = { method: "POST", path: "/comments", handler: controllers.createComment, config: { auth: 'jwt' } };
const removeComment = { method: "DELETE", path: "/comments/{id}", handler: controllers.removeComment, config: { auth: 'jwt' } };

const routes = [ getComments, createComment, removeComment ];
module.exports = routes;
