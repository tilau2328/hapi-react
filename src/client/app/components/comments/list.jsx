import React, { Component, PropTypes } from 'react';

class CommentList extends Component {
  renderComment(comment){
    return (
      <li key={comment.id}>
        {comment.text}
        <button
          onClick={() => this.props.onClickRemove(comment.id)}
          className="btn btn-link"
        >
          X
        </button>
      </li>
    )
  }

  render() {
    return (
      <ul className="comment-list">
        { this.props.comments.map(comment => this.renderComment(comment)) }
      </ul>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onClickRemove: PropTypes.func.isRequired
};

export default CommentList;
