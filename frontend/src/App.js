import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './lib';

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
