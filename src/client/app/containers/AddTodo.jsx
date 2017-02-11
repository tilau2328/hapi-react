import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="col-sm-3">
      <form
        className="form-group"
        onSubmit={
          (e) => {
            e.preventDefault();
            if (!input.value.trim()) { return; }
            dispatch(addTodo(input.value));
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

export default AddTodo = connect()(AddTodo);
