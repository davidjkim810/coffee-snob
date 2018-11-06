import React from 'react';
import { fetchCafe } from '../actions'
import { connect } from 'react-redux'


class CafesShow extends React.Component {

  componentDidMount() {
    this.props.fetchCafe(this.props.match.params.cafeId)
  }
  render(){
    return (
      <div className="cafe-show">
        <div className="container-fluid">
          <h3 className="cafe-header">{this.props.cafe.name}</h3>
          <div className="cafe-body">
          </div>
        </div>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return {
      cafe: state.cafes.cafe
    }
  }
export default connect(mapStateToProps, {fetchCafe})(CafesShow);
