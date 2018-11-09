import React, { Component } from 'react';

class CommentsIndex extends Component {

  
  render(){

    return (
      <div className="comments-container">
        <h3 className="comments-header">Comments:</h3>
        {this.props.cafe}

      </div>
    )
  };
}

export default CommentsIndex;
