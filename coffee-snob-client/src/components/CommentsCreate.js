import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class CommentsCreate extends Component {
  constructor(){
    super()
    this.state = {
      content: '',
      commenter: ''
    }
  }

  handleOnChange (event) {
      this.setState({
        [event.target.name]: event.target.value
      });
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.createComment(this.state, this.props.cafe)
    this.setState({
      content: '',
      commenter: ''
    })
  }


  render() {
    return (
      <div className="comment-form">
        <h6 className="comment-form-header"></h6>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <FormGroup>

            <ControlLabel>Name:</ControlLabel>
            <FormControl
              type="text"
              name="commenter"
              value={this.state.commenter}
              onChange={(event)=> this.handleOnChange(event)}
            />

            <ControlLabel>Comment:</ControlLabel>
            <FormControl
              type="textarea"
              name="content"
              value={this.state.content}
              onChange={(event)=> this.handleOnChange(event)}
            />

            <button className="btn btn-sm btn-dark" type="submit">Submit</button>

          </FormGroup>
        </form>

      </div>
    )
  }

}

export default connect(null, { createComment })(CommentsCreate);
