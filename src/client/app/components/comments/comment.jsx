import React, { Component, PropTypes } from 'react';

let Comment = (props) => {
  return <li key={props.id}>{props.text}</li>;
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClickRemove: PropTypes.function.isRequired
};

export default CommentList;
