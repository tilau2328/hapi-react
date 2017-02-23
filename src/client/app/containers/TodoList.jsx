import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import Todo from '../components/Todo';
import { showEditTodo } from '../actions';

function item(todos, loading, onTodoClick, onEditClick) {
  if (loading) return <h2>Loading</h2>;
  return (
    <ul>
      {
        todos.map(
          todo => <Todo
            key={todo.id}
            {...todo}
            onTodoClick={() => onTodoClick(todo.id)}
            onEditClick={() => onEditClick(todo.id)}
          />
        )
      }
    </ul>
  );
}

const TodoList = ({ todos, loading, onTodoClick, onEditClick }) => (
  <div>
    { item(todos, loading, onTodoClick, onEditClick) }
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditClick: id => dispatch(showEditTodo(id))
  };
};

export default connect(null, mapDispatchToProps)(TodoList);
