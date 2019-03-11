import React, { Component } from 'react';
import { BrowserRouter as Router, Route/*, Link*/ } from 'react-router-dom';
import { connect } from 'react-redux';
import './lib';
import './App.css';
import { Navbar } from 'components';
import {
  Dashboard,
  Contracts,
  Mailing,
  Invoices,
  Statistics,
  Settings
} from 'pages';

const Pages = {
  Dashboard,
  Contracts,
  Mailing,
  Invoices,
  Statistics,
  Settings
}

const ROUTER_CONFIGS = [{
  path: '/dashboard',
  page: 'Dashboard'
}, {
  path: '/contracts',
  page: 'Contracts'
}, {
  path: '/mails',
  page: 'Contracts',
}, {
  path: '/documents',
  page: 'Contracts',
}, {
  path: '/messages',
  page: 'Mailing'
}, {
  path: '/invoices',
  page: 'Invoices'
}, {
  path: '/statistics',
  page: 'Statistics'
}, {
  path: '/settings',
  page: 'Settings'
}];

export class App extends Component {
  render() {
    const renderedPages = ROUTER_CONFIGS.map((routerConfig, index) => (
      <Route key={'page-' + index} path={routerConfig.path} component={Pages[routerConfig.page]} />
    ));

    return (
      <Router>
        <React.Fragment>
          <div className="d-flex flex-row">
            <div className="w-10">
              <Navbar />
            </div>
            <div className="w-90">
              {renderedPages}
            </div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}