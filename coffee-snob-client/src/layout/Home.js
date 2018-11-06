import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="home">
      <div className="welcome">
        <h2>Need a good cup of coffee?</h2>
        <span className="welcome-text">Visit the most delicious coffee spots near you!</span>
        <Link to="/cafes">
        <br/><br/>
            <button className="btn btn-md btn-danger">
              Get Started
            </button>
         </Link>
      </div>
    </div>
  );
}

export default Home;
