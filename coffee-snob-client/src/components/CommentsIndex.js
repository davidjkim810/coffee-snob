import React, { Component } from 'react';
import { fetchComments } from '../actions';
import { connect } from 'react-redux';
import CommentsShow from './CommentsShow';

class CommentsIndex extends Component {

  renderComments(){
    if (this.props.comments.comments) {
      return this.props.comments.comments.map(comment=>
         <CommentsShow key={comment.id} comment={comment}/>)
     }
  }

  render(){
    return (
      <div className="comments-container">
        <h4 className="comments-header">Comments
        </h4>

        {this.renderComments()}

      </div>
    )
  };
}

export default CommentsIndex;
