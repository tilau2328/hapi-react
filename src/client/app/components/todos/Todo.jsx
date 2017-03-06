import React, { PropTypes } from 'react';

const Todo = ({ onTodoClick, onRemoveClick, completed, text }) => (
  <li>
    <div className="btn-group">
      <button
        className={
          completed ? 'btn btn-success' : 'btn btn-warning'
        }
        onClick={onTodoClick}
      >
        {text}
      </button>
      <button
        className={
          completed ? 'btn btn-success' : 'btn btn-warning'
        }
        onClick={onRemoveClick}
      >
        X
      </button>
    </div>
  </li>
);

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
