import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import React, { PropTypes } from 'react';

import Todo from '../../components/todos/Todo';
import { showEditTodo } from '../../actions';
import REMOVE_TODO_MUTATION from '../../graphql/mutations/removeTodo.graphql';

const TodoList = ({ todos, onTodoClick, onRemoveClick }) => (
  <ul>
    {
      todos.map(
        todo => <Todo
          key={todo.id}
          {...todo}
          onTodoClick={() => onTodoClick(todo.id)}
          onRemoveClick={() => onRemoveClick(todo.id)}
        />
      )
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

const withMutations = graphql(REMOVE_TODO_MUTATION, {
  props: ({ ownProps, mutate }) => {
    return {
      onRemoveClick: id => mutate({
        variables: { id },
        updateQueries: {
          Todos: (prev, { mutationResult }) => {
            let i = prev.getTodos.findIndex(todo => todo.id == id);
            prev.getTodos.splice(i, 1);
            return prev;
          }
        }
      }),
      ...ownProps
    };
  }
});

export default connect()(withMutations(TodoList));
