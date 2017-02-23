import React, { PropTypes } from 'react';

const Todo = ({ onTodoClick, onEditClick, completed, text }) => (
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
        onClick={onEditClick}
      >
        Edit
      </button>
    </div>
  </li>
);

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
