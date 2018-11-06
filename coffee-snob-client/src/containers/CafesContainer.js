import React, { Component } from 'react';
import CafesCreate from '../components/CafesCreate';
import CafesIndex from '../components/CafesIndex';
import CafesShow from '../containers/CafesShow';
import { fetchCafes } from '../actions';
import { connect } from 'react-redux';

class CafesContainer extends Component {

  componentDidMount(){
    this.props.fetchCafes()
  }

  render() {
    return (
      <div>
        <CafesIndex cafes={this.props.cafes} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cafes: state.cafes,
  }
}
export default connect(mapStateToProps, { fetchCafes })(CafesContainer);
