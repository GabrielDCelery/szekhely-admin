import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch/*, Link*/ } from 'react-router-dom';
import './lib';
import './App.css';
import { PrivateRoute } from 'components';
import {
  Dashboard,
  Contracts,
  Mailing,
  Invoices,
  Statistics,
  Settings,
  Login
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

localStorage.setItem('user', JSON.stringify({ "isLoggedIn": true, "rules": ["contracts-page:visit", "dashboard-page:visit"] }))

export class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/login" component={Login} />
            {ROUTER_CONFIGS.map((routerConfig, index) => (
              <PrivateRoute
                key={'page-' + index}
                path={routerConfig.path}
                Component={Pages[routerConfig.page]}
                redirectTo='/login'
              />
            ))}
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}