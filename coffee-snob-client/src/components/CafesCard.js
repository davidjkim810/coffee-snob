import React from 'react';
import { Link } from 'react-router-dom';

class CafesCard extends React.Component {

  render (){
    return (
      <div className="cafe-card">
        <div className="container-fluid text-center">
          <h5 className="cafe-header">{this.props.cafe.name}</h5>
          {this.props.cafe.image_url ? <img src={this.props.cafe.image_url} width="500" height="400" alt="pic" /> : <img src='http://cs.pes.edu/wp-content/uploads/2016/06/default-1.jpg' width="500" height="400" alt="pic" /> }


          <br/><br/>

          <span className="bold-text"><strong>Address: <br/></strong></span>{this.props.cafe.address}
          <br/><br/>

          <span className="bold-text"><strong>Brew Methods: <br/></strong></span>{this.props.cafe.brew_methods}
          <br/><br/>

          <span className="bold-text"><strong>Source of Beans: <br/></strong></span>{this.props.cafe.bean_source}
          <br/><br/>


        </div>
      </div>
  )}
}
export default CafesCard;
