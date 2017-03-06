const User = require('../models/user');
const config = require('../config');

var validate = function (decoded, request, callback) {
  User.findById(decoded.sub, function(err, user){
    if(err) return callback(err);
    if(!user) return callback(null, false);
    return callback(null, true);
  });
};

function register(server) {
  server.auth.strategy('jwt', 'jwt',
  { key: config.secret,
    validateFunc: validate,
    verifyOptions: { algorithms: [ 'HS256' ] }
  });

  server.auth.default('jwt');
};

module.exports = {
  register: register
}
