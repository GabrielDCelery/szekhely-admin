import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect/*, Link*/ } from 'react-router-dom';
import './lib';
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
  AddNew,
  QuickSearch
} from 'pages';
import { connect } from 'react-redux';
import { routerConfig, navbarItemConfigs } from './state/selectors';
import './App.scss';

const Pages = {
  Dashboard,
  Contracts,
  Mailing,
  Invoices,
  Statistics,
  Settings,
  Login,
  Logout,
  AddNew,
  QuickSearch
}

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/login' component={Login} />
          <MainLayout
            Navbar={<AuthenticatedComponent Component={() => (<Navbar navbarItemConfigs={this.props.navbarItemConfigs}/>)} />}
            Content={
              <Switch>
                <Redirect exact from='/' to='/dashboard' />
                {this.props.routerConfig.map((routerConfig, index) => (
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

const mapStateToProps = state => {
	return {
    routerConfig: routerConfig(state),
    navbarItemConfigs: navbarItemConfigs(state)
  }
}

const connected = connect(mapStateToProps)(App);

export { connected as App };