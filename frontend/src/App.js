import React, { Component } from 'react';
import { BrowserRouter as Router, Route/*, Link*/ } from 'react-router-dom';
import { connect } from 'react-redux';
import './lib';
import './App.css';
import { Navbar } from './components/Navbar';
import {
  Dashboard,
  Contracts,
  Mailing,
  Invoices,
  Statistics,
  Settings
} from './pages';

const Pages = {
  Dashboard,
  Contracts,
  Mailing,
  Invoices,
  Statistics,
  Settings
}

class App extends Component {
  render() {
    const renderedPages = this.props.routerConfigs.map((routerConfig, index) => (
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

function mapStateToProps(state) {
  return {
    routerConfigs: state.router
  }
}

const connected = connect(mapStateToProps)(App);

export { connected as App };
