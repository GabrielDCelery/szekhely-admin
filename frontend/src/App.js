import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect/*, Link*/ } from 'react-router-dom';
import './lib';
import './App.css';
import { AuthenticationRoute, PrivateRoute } from 'components';
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

export class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Redirect exact from='/' to='/dashboard' />
            <AuthenticationRoute
              path='/login'
              Component={Login}
              redirectAuthenticatedUserTo='/'
            />
            {ROUTER_CONFIGS.map((routerConfig, index) => (
              <PrivateRoute
                key={'page-' + index}
                path={routerConfig.path}
                Component={Pages[routerConfig.page]}
                redirectUnauthorizedUserTo='/login'
              />
            ))}
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}