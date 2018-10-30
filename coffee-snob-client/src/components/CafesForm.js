import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCafe } from '../actions';
import { FormControl, FormGroup } from 'react-bootstrap';

class CafesForm extends Component {

  constructor() {
    super();

    this.state = {
      name: '' ,
      address: '',
      desription: '',
      brew_methods: '',
      price_range: '',
      bean_source: '',
      image_url: ''
    };
  }

  handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createCafe(this.state)
    this.props.history.push('/restaurants')
  }

  render(){
    return (
      <div className="restaurant-form">
        <h5>Add a Coffee Spot</h5>
        <form onSubmit={this.handleOnSubmit} >

          <FormGroup>

            <label>Cafe Name:</label>
            <FormControl
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Address:</label>
            <FormControl
              type='text'
              name='address'
              value={this.state.address}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Description:</label>
            <FormControl
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Price:</label>
            <FormControl
              componentClass="select"
              placeholder="select"
              name="price_range"
              value={this.state.price_range}
              onChange={this.handleOnChange}
              >
              <option value="select">select</option>
              <option value="Inexpensive">Inexpensive</option>
              <option value="Moderate">Moderate</option>
              <option value="Expensive">Expensive</option>
            </FormControl>
            <br></br>

            <label>Brew Methods:</label>
            <FormControl
              className="form-control"
              type="text"
              name="brew_methods"
              value={this.state.brew_methods}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Bean Source:</label>
            <FormControl
              className="form-control"
              type="text"
              name="bean_source"
              value={this.state.bean_source}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Image URL:</label>
            <FormControl
              className="form-control"
              type="text"
              name="image_url"
              value={this.state.image_url}
              onChange={this.handleOnChange}
            />
            <br></br>

            <button className="btn btn-sm btn-dark" type="submit">Submit</button>

          </FormGroup>

        </form>
      </div>
    );
  }
}

export default CafesForm;
