import { graphql } from 'react-apollo';

import TodoList from './TodoList';

import TODOS_QUERY from '../graphql/queries/Todos.graphql';
import TOGGLE_TODO_MUTATION from '../graphql/mutations/toggleTodo.graphql';

const withData = graphql(TODOS_QUERY, {
  options: (params) => {
    return {
      variables: {
        filter: params.filter
      }
    };
  },
  props: ({ ownProps, data: { loading, getTodos } }) => {
    const props = {
      loading,
      todos: getTodos || [],
      ...ownProps
    };
    return props;
  }
});

const withMutations = graphql(TOGGLE_TODO_MUTATION, {
  props: ({ ownProps, mutate }) => {
    return {
      onTodoClick: id => mutate({ variables: { id } }),
      ...ownProps
    };
  }
});

export default withMutations(withData(TodoList));
