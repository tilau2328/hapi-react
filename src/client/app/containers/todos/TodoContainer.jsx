import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';

import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import Footer from '../../components/todos/Footer';

import TODOS_QUERY from '../../graphql/queries/Todos.graphql';

const TodoContainer = ({ todos, loading }) => {
  if (loading) return <h2>Loading</h2>;
  return (
    <div>
      <VisibleTodoList todos={todos} />
      <Footer />
      <AddTodo />
    </div>
  );
};

TodoContainer.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired
};

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

export default withData(TodoContainer);
