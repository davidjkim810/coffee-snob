import React from 'react';
import { fetchCafe } from '../actions'
import { fetchComments } from '../actions'
import CommentsIndex from '../components/CommentsIndex';
import { connect } from 'react-redux'
import CommentsCreate from '../components/CommentsCreate';


class CafesShow extends React.Component {

  componentDidMount() {
    this.props.fetchCafe(this.props.match.params.cafeId)
    this.props.fetchComments(this.props.match.params.cafeId)
  }
  render(){
    return (
      <div className="cafe-show">
        <div className="container-fluid">
          <h3 className="cafe-header">{this.props.cafe.name}</h3>
          <div className="cafe-body">
            <img src={this.props.cafe.image_url} width="100%" height="75%" alt="pic" />
          </div>
          <span className="bold-text"><strong>Address: <br/></strong></span>{this.props.cafe.address}
          <br/><br/>
          <span className="bold-text"><strong>Description: <br/></strong></span>{this.props.cafe.description}
          <br/><br/>
          <span className="bold-text"><strong>Brew Methods: <br/></strong></span>{this.props.cafe.brew_methods}
          <br/><br/>
          <div className="bottom-border">
          </div>

          <CommentsIndex cafe={this.props.match.params.cafeId} comments={this.props.comments}/>
          <CommentsCreate cafe={this.props.match.params.cafeId}/>

        </div>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return {
      cafe: state.cafes.cafe,
      comments: state.comments
    }
  }
export default connect(mapStateToProps, {fetchCafe, fetchComments})(CafesShow);
