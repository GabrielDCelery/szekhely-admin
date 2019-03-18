import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect/*, Link*/ } from 'react-router-dom';
import './lib';
import './App.css';
import { AuthenticatedComponent, AuthenticatedRoute, Navbar, MainLayout } from 'components';
import {
  Dashboard,
  Contracts,
  Mailing,
  Invoices,
  Statistics,
  Settings,
  Login,
  Logout,
  AddNew
} from 'pages';
import { router } from 'services';

const Pages = {
  Dashboard,
  Contracts,
  Mailing,
  Invoices,
  Statistics,
  Settings,
  Login,
  Logout,
  AddNew
}

const ROUTER_CONFIG = router.createRoutesConfig();

export class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Redirect exact from='/' to='/dashboard' />
          <Route path='/logout' component={Logout} />
          <Route path='/login' component={Login} />
          <MainLayout
            Navbar={<AuthenticatedComponent Component={Navbar} />}
            Content={
              <Switch>
                {ROUTER_CONFIG.map((routerConfig, index) => (
                  <AuthenticatedRoute
                    key={'page-' + index}
                    path={routerConfig.path}
                    Component={Pages[routerConfig.component]}
                    redirectUnauthorizedUserTo='/login'
                  />
                ))}
              </Switch>
            }
          />
        </React.Fragment>
      </Router>
    );
  }
}