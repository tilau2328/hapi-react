const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user){
  const timestamp = (new Date).getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

const signIn = function(req, res){
  const email = req.payload.email;
  const password = req.payload.password;

  if( !email || !password ){
    return res({ error: 'Invalid email or password' });
  }

  User.findOne({ email: email }, function(err, user){
    if(err){ return res({ error: err }); }
    if(!user){ return res({ error: 'User not found' }); }
    res({ token: tokenForUser(user) });
  });
}

const signUp = function(req, res){
  const email = req.payload.email;
  const password = req.payload.password;

  if( !email || !password ){
    return res({ error: 'Invalid email or password' });
  }

  User.findOne({ email: email }, function(err, user){
    if(err){ return res({ error: err }); }
    if(user){
      return res({ error: 'Email is in use' });
    }
    const newUser = new User({ email: email, password: password });
    newUser.save(function(err, user){
      if(err){ return res({ error: err }); }
      res({ token: tokenForUser(user) });
    });
  });
}

module.exports = {
  signIn: signIn,
  signUp: signUp
};
