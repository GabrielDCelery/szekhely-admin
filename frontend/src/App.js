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
import {router} from 'services';

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

const ROUTER_CONFIG = router.createRoutesConfig();

export class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="d-flex">
            <AuthenticatedComponent Component={Navbar} />
            <Switch>
              <Redirect exact from='/' to='/dashboard' />
              <Route path='/login' component={Login} />
              <Route path='/logout' component={Logout} />
              {ROUTER_CONFIG.map((routerConfig, index) => (
                <AuthenticatedRoute
                  key={'page-' + index}
                  path={routerConfig.path}
                  Component={Pages[routerConfig.component]}
                  redirectUnauthorizedUserTo='/login'
                />
              ))}
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}