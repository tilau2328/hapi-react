import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li>
    <button
      className={
        completed ? 'btn btn-success' : 'btn btn-warning'
      }
      onClick={onClick}
    >
      {text}
    </button>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
