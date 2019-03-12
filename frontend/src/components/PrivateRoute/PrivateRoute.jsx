import _ from 'lodash-core';
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  render() {
    return (
      <Route
        path={this.props.path}
        render={() => (
          this.props.isUserLoggedIn ? (<this.props.Component />) : (<Redirect to={this.props.redirectTo} />)
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: _.get(state, ['authentication', 'user', 'isLoggedIn'], false)
  }
}

const connected = connect(mapStateToProps)(PrivateRoute);

export { connected as PrivateRoute };