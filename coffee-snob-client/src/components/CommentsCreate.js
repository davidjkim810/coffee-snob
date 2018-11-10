import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class CommentsCreate extends Component {
  constructor(){
    super(props)
    this.state = {
      content: '',
      commenter: '',
      cafe_id: ''
    }
  }

  handleOnChange (event) {
      this.setState({
        [event.target.name]: event.target.value
      });

    }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.createComment(this.state)
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="comment-form">
        <h7 className="comment-form-header">New Comment</h7>
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
              type="text"
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
