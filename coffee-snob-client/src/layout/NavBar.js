import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
         <div className="container">
           <NavLink className="navbar-brand" to="/">
             CoffeeSnob
           </NavLink>
           <button
             className="navbar-toggler"
             type="button"
             data-toggle="collapse"
             data-target="#navbarNav"
           >
             <span className="navbar-toggler-icon" />
           </button>

           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                 <NavLink className="nav-link" to="/"
                 >
                   Home
                 </NavLink>
               </li>
             </ul>
           </div>

           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                 <NavLink className="nav-link" to="/cafes">
                   Coffee Shops
                 </NavLink>
               </li>
             </ul>
           </div>

           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                 <NavLink className="nav-link" to="/new">
                   Add Coffee Shop
                 </NavLink>
               </li>
             </ul>
           </div>

         </div>
       </nav>
    );
  }
}

export default NavBar;
