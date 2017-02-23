const todosController = require('../controllers/todos');

const resolvers = (models) => ({
  Query: {
    getTodos(root, { filter }) {
      return todosController.getTodosByFilter(models.Todo, filter);
    }
  },
  Mutation: {
    createTodo(root, args) {
      const todo = new models.Todo(args);
      console.log("CREATE TODO");
      return todo.save().then((response) => response);
    },
    toggleTodo(root, { id }) {
      return todosController.toggleTodo(models.Todo, id);
    },
    editTodo(root, { id, text }) {
      models.Todo
        .find({ id })
        .then(
          (todo) => {
            todo.text = text;
            todo.save().then((response) => response);
          }
        );
    }
  }
});

module.exports = resolvers;
