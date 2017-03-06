const controllers = require('../controllers/auth');

const signIn = { method: "POST", path: "/auth/signin", handler: controllers.signIn, config: { auth: false } };
const signUp = { method: "POST", path: "/auth/signup", handler: controllers.signUp, config: { auth: false } };

const routes = [ signIn, signUp ];
module.exports = routes;
