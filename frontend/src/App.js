import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect/*, Link*/ } from 'react-router-dom';
import './lib';
import './App.css';
import { AuthenticatedComponent, AuthenticatedRoute, Navbar } from 'components';
import {
  Dashboard,
  Contracts,
  Mailing,
  Invoices,
  Statistics,
  Settings,
  Login,
  Logout
} from 'pages';

const Pages = {
  Dashboard,
  Contracts,
  Mailing,
  Invoices,
  Statistics,
  Settings,
  Login,
  Logout
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
          <AuthenticatedComponent Component={Navbar} />
          <Switch>
            <Redirect exact from='/' to='/dashboard' />
            <Route path='/login' component={Login}/>
            <Route path='/logout' component={Logout} />
            {ROUTER_CONFIGS.map((routerConfig, index) => (
              <AuthenticatedRoute
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