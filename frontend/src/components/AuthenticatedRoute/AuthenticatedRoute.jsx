import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isUserLoggedInSelector } from 'state';

class AuthenticatedRoute extends Component {
  render() {
    const {
      isUserLoggedIn,
      AuthenticatedComponent,
      redirectUnauthorizedUserTo,
      path
    } = this.props;

    return (
      <Route
        path={path}
        render={() => (
          isUserLoggedIn ? <AuthenticatedComponent /> : <Redirect to={redirectUnauthorizedUserTo} />
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: isUserLoggedInSelector(state)
  }
}

const connected = connect(mapStateToProps)(AuthenticatedRoute);

export { connected as AuthenticatedRoute };