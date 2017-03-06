import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import ADD_TODO_MUTATION from '../../graphql/mutations/addTodo.graphql';

let AddTodo = ({ addTodo }) => {
  let input;

  return (
    <div className="col-sm-3">
      <form
        className="form-group"
        onSubmit={
          (e) => {
            e.preventDefault();
            if (!input.value.trim()) { return; }
            addTodo(input.value.trim());
            input.value = '';
          }
        }
      >
        <div className="input-group">
          <input
            className="form-control"
            ref={(node) => { input = node; }}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-primary"
              type="submit"
            >
              Add Todo
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const withMutations = graphql(ADD_TODO_MUTATION, {
  props: ({ ownProps, mutate }) => {
    return {
      addTodo: text => mutate({
        variables: { text },
        updateQueries: {
          Todos: (prev, { mutationResult }) => {
            prev.getTodos.push(mutationResult.data.createTodo);
            return prev;
          }
        }
      }),
      ...ownProps
    };
  }
});

export default AddTodo = withMutations(connect()(AddTodo));
