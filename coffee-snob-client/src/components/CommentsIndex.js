import React, { Component } from 'react';

class CommentsIndex extends Component {


  render(){

    return (
      <div className="comments-container">
        <h4 className="comments-header">Comments</h4>
        {this.props.cafe}

      </div>
    )
  };
}

export default CommentsIndex;
