import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './layout/NavBar';
import Home from './layout/Home';
import Footer from './layout/Footer';
import CafesCreate from './components/CafesCreate';
import CafesShow from './components/CafesShow';
import CafesIndex from './components/CafesIndex';

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">
          <NavBar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/new" component={CafesCreate} />
              <Route exact path="/cafes" component={CafesIndex} />
              <Route path="/cafes/:cafeId" component={CafesShow} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
