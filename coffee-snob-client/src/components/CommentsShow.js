import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class CommentsShow extends Component {
  render(){
    return (
      <div className="comment-show-container">

      <ListGroupItem>{this.props.comment.content} {<br></br>} <span className="italics"> -{this.props.comment.commenter}</span></ListGroupItem>

      </div>
    )
  }
}

export default CommentsShow;
