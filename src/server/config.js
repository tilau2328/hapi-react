module.exports = {
  secret: 'parabailaralabambayonecessitoumpoquitodetequila',
  host: {
    ip: process.env.IP || 'localhost',
    port: process.env.PORT || 8000
  },
  database: {
    host: 'mongodb://localhost:auth/auth'
  }
};
