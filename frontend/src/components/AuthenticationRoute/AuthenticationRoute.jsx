import _ from 'lodash-core';
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthenticationRoute extends Component {
  render() {
    return (
      <Route
        path={this.props.path}
        render={() => (
          this.props.isUserLoggedIn ? (<Redirect to={this.props.redirectAuthenticatedUserTo} />) : (<this.props.Component />)
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: _.get(state, ['user', 'isLoggedIn'], false)
  }
}

const connected = connect(mapStateToProps)(AuthenticationRoute);

export { connected as AuthenticationRoute };