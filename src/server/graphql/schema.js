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
    removeTodo(id: ID!): Int
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = schema;
