import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class CommentBox extends Component {
  constructor(props){
      super(props);
      this.state = { comment: '' }
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: ''  });
  }

  render() {
    return (
      <form
        className="comment-box form-group col-sm-3"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <h4>Add Comment</h4>
        <textarea
          className="form-control "
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
        />
        <button className="btn btn-primary btn-block">Submit Comment</button>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
