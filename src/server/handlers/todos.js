
const getTodosByFilter = function(model, filter){
  var query = {};
  switch (filter) {
    case "COMPLETED":
      query.completed = true;
      break;
    case "ACTIVE":
      query.completed = false;
      break;
    case "ALL":
      break;
    default:
      // TODO: return invalid filter error
      break;
  }
  return new Promise((resolve, reject) => {
    model.find(query, (err, todos) => {
      err ? reject(err) : resolve(todos);
    });
  });
};

const toggleTodo = function(model, id){
  return new Promise((resolve, reject) => {
    model.findById(id, (err, todo) => {
      if(err) reject(err);
      if(!todo) reject('TODO not found');
      todo.completed = !todo.completed;
      todo.save((err, todo) => {
        err ? reject(err) : resolve(todo);
      });
    });
  });
};

const removeTodo = function(model, id){
  return new Promise((resolve, reject) => {
    model.findById(id, (err, todo) => {
      if(err) reject(err);
      if(!todo) reject('TODO not found');
      todo.remove((err) => {
        err ? reject(err) : resolve();
      });
    });
  });
};

module.exports = {
  getTodosByFilter: getTodosByFilter,
  toggleTodo: toggleTodo,
  removeTodo: removeTodo
};
