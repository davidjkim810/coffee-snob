import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCafe } from '../actions';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class CafesForm extends Component {

  constructor() {
    super();
    this.state = {
      name: '' ,
      address: '',
      description: '',
      brew_methods: '',
      price_range: '',
      bean_source: '',
      image_url: ''
    };
  }

  handleOnChange (event) {
      this.setState({
        [event.target.name]: event.target.value
      });
      console.log(event.target.value)
    }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.createCafe(this.state)
  }

  render(){
    return (
      <div className="cafe-form">
        <h5>Add a Coffee Spot</h5>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <FormGroup>
            <ControlLabel>Cafe Name:</ControlLabel>
            <FormControl
              type="text"
              name="name"
              value={this.state.name}
              onChange={(event)=>this.handleOnChange(event)}
            />

            <ControlLabel>Address:</ControlLabel>
            <FormControl
              type="text"
              name="address"
              value={this.state.address}
              onChange={(event)=>this.handleOnChange(event)}
            />

            <ControlLabel>Description:</ControlLabel>
            <FormControl
              type="textarea"
              name="description"
              value={this.state.description}
              onChange={(event)=> this.handleOnChange(event)}
            />

            <ControlLabel>Brew Methods:</ControlLabel>
            <FormControl
              type="text"
              name="brew_methods"
              value={this.state.brew_methods}
              onChange={(event)=> this.handleOnChange(event)}
            />

            <ControlLabel>Source of Beans:</ControlLabel>
            <FormControl
              type="text"
              name="bean_source"
              value={this.state.bean_source}
              onChange={(event)=> this.handleOnChange(event)}
            />

            <ControlLabel>Price Range:</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              name="price_range"
              value={this.state.price_range}
              onChange={(event)=> this.handleOnChange(event)}
            >
            <option value="select">Select Price Range</option>
            <option value="Inexpensive">Inexpensive</option>
            <option value="Average">Average</option>
            <option value="Expensive">Expensive</option>
            </FormControl>

            <ControlLabel>Image URL</ControlLabel>
            <FormControl
              type="textarea"
              name="image_url"
              value={this.state.image_url}
              onChange={(event)=> this.handleOnChange(event)}
            />
            <br />

            <button className="btn btn-sm btn-dark" type="submit">Submit</button>

          </FormGroup>
        </form>
      </div>
    );
  }
}

export default connect(null, { createCafe })(CafesForm);
