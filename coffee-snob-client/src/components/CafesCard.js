import React from 'react';

class CafesCard extends React.Component {

  render (){
    return (
      <div className="cafe-card">
        <div className="container-fluid text-center">
        {this.props.cafe.name}
          <br/><br/><img src={this.props.cafe.image_url} width="125" height="100" alt="pic" />
          <br/><br/>

          <span className="bold-text">Name: </span>{this.props.cafe.name}
          <br></br>
          <span className="bold-text">Address: </span>{this.props.cafe.address}
          <br></br>

        </div>
      </div>
  )}
}
export default CafesCard;
