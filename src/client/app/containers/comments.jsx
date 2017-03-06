import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from '../components/comments/list.jsx';
import CommentBox from '../components/comments/box.jsx';
import * as actions from '../actions';

class CommentContainer extends Component {
  constructor(props){
    super(props);
    this.props.fetchComments();
  }

  render() {
    return (
      <div>
        <CommentList
          onClickRemove={this.props.removeComment}
          comments={this.props.comments}
        />
        <CommentBox />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { comments: state.comments }
}

export default connect(mapStateToProps, actions)(CommentContainer);
