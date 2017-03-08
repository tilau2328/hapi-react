const todosController = require('../handlers/todos');

const resolvers = (models) => ({
  Query: {
    getTodos(root, { filter }) {
      return todosController.getTodosByFilter(models.Todo, filter);
    }
  },
  Mutation: {
    createTodo(root, args) {
      const todo = new models.Todo(args);
      return todo.save().then((response) => response);
    },
    toggleTodo(root, { id }) {
      return todosController.toggleTodo(models.Todo, id);
    },
    removeTodo(root, { id }) {
      return todosController.removeTodo(models.Todo, id);
    }
  }
});

module.exports = resolvers;
