const schema = `
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  type Query {
    getTodos(filter: String): [Todo]
  }

  type Mutation {
    createTodo(text: String!): Todo
    toggleTodo(id: ID!): Todo
    editTodo(id: ID!, text: String!): Todo
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = schema;
