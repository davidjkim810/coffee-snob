import React from 'react';

class CafesCard extends React.Component {

  render (){
    return (
      <div className="cafe-card">
        <div className="container-fluid text-center">
        {this.props.cafe.name}
          <br/><br/><img src={this.props.cafe.image_url} width="250" height="200" alt="pic" />
          <br/><br/>

          <span className="bold-text"><strong>Address: </strong></span>{this.props.cafe.address}
          <br></br>
          <span className="bold-text"><strong>Description: </strong></span>{this.props.cafe.description}
          <br></br>
          <span className="bold-text">Source of Beans: </span>{this.props.cafe.bean_source}
          <br></br>

        </div>
      </div>
  )}
}
export default CafesCard;
