import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './lib';
import './App.css';
import { Navbar } from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Contracts from './pages/Contracts';
import Mailing from './pages/Mailing';
import Invoices from './pages/Invoices';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';

const Routes = {
  Dashboard,
  Contracts,
  Mailing,
  Invoices,
  Statistics,
  Settings
}

class App extends Component {
  render() {
    const pageConfigs = [{
      label: 'Dasboard',
      icon: 'tachometer-alt',
      path: '/dashboard',
      page: 'Dashboard'
    }, {
      label: 'Contracts',
      icon: 'file-contract',
      path: '/contracts',
      page: 'Contracts'
    }, {
      label: 'Mailing',
      icon: 'envelope-square',
      path: '/mailing',
      page: 'Mailing'
    }, {
      label: 'Invoices',
      icon: 'file-invoice',
      path: '/invoices',
      page: 'Invoices'
    }, {
      label: 'Statistics',
      icon: 'chart-line',
      path: '/statistics',
      page: 'Statistics'
    }, {
      label: 'Settings',
      icon: 'cog',
      path: '/settings',
      page: 'Settings'
    }];

    const renderedPages = pageConfigs.map((pageConfig, index) => (
      <Route key={'page-' + index} path={pageConfig.path} component={Routes[pageConfig.page]} />
    ));

    return (
      <Router>
        <React.Fragment>
          <div className="d-flex flex-row">
            <div className="w-10">
              <Navbar pageConfigs={pageConfigs} />
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

export default App;
