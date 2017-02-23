const { apolloHapi } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');

const graphqlSchema = require('../graphql/schema');
const createResolvers = require('../graphql/resolvers');

const User = require('../models/user');
const Todo = require('../models/todo');

const executableSchema = makeExecutableSchema({
  typeDefs: [graphqlSchema],
  resolvers: createResolvers({ User, Todo }),
});

module.exports = {
  register: apolloHapi,
  options: {
    path: '/graphql',
    apolloOptions: () => ({
      pretty: true,
      schema: executableSchema
    })
  }
};
