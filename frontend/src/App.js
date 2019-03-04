import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import Companies from './pages/Companies';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
