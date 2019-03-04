import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './lib';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Contracts from './pages/Contracts';
import Mailing from './pages/Mailing';
import Invoices from './pages/Invoices';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="d-flex flex-row">
            <div className="w-10">
              <Navbar />
            </div>
            <div className="w-90">
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/contracts" component={Contracts} />
              <Route path="/mailing" component={Mailing} />
              <Route path="/invoices" component={Invoices} />
              <Route path="/statistics" component={Statistics} />
              <Route path="/settings" component={Settings} />
            </div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
