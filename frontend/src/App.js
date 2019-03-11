import _ from 'lodash-core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route/*, Link*/ } from 'react-router-dom';
import './lib';
import './App.css';
import { Navbar } from 'components';
import { useStoredLoginCredentials } from 'state/actions';
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

class App extends Component {
  componentDidMount() {
    localStorage.setItem('user', JSON.stringify({ isLoggedIn: true, rules: ['contracts-page:visit', 'dashboard-page:visit'] }))
    return this.props.onUseStoredLoginCredentials();
  }

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

const mapStateToProps = state => {
  return {
    isUserLoggedIn: _.get(state, ['authentication', 'user', 'isLoggedIn'], false)
  }
}

const mapActionsToProps = {
  onUseStoredLoginCredentials: useStoredLoginCredentials
}

const connected = connect(mapStateToProps, mapActionsToProps)(App);

export { connected as App };