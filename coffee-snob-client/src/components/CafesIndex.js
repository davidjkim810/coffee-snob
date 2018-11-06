import React, { Component } from 'react';
import CafesCard from './CafesCard';

class CafesIndex extends Component {

  renderCafes() {
    if (this.props.cafes.cafes){
      return this.props.cafes.cafes.map(cafe => <CafesCard key={cafe.id} cafe={cafe}/>)
    }
  }
  render(){
    return (
      <div className="container">
        {this.renderCafes()}
      </div>
    )
  }
}

export default CafesIndex;
