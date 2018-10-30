import React, { Component } from 'react';
import CafesCreate from '../components/CafesCreate';
import CafesIndex from '../components/CafesIndex';
import CafesShow from '../components/CafesShow';
import { connect } from 'react-redux';

class CafesContainer extends Component {
  render() {
    return (
      <div>
        <CafesForm />
        <CafesIndex cafes={this.props.cafes} />
      </div>
    )
  }
}

const mapStateToProps = state = ({
  cafes: state.cafes
})

})
export default connect(mapStateToProps)(CafesContainer);
