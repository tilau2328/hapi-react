import { graphql, compose  } from 'react-apollo';
import { connect } from 'react-redux';

import TodoList from './TodoList';

import TOGGLE_TODO_MUTATION from '../../graphql/mutations/toggleTodo.graphql';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../filters/todos';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const withMutations = graphql(TOGGLE_TODO_MUTATION, {
  props: ({ ownProps, mutate }) => {
    return {
      onTodoClick: id => mutate({
        variables: { id },
        updateQueries: {
          Todos: (prev, { mutationResult }) => {
            let todo = prev.getTodos.find(todo => todo.id == id);
            todo.completed = mutationResult.data.toggleTodo.completed;
            return prev;
          }
        }
      }),
      ...ownProps
    };
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(ownProps.todos, state.visibilityFilter)
  };
};

export default connect(mapStateToProps)(withMutations(TodoList));
