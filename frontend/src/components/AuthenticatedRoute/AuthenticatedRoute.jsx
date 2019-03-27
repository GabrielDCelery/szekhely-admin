import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isUserLoggedIn } from 'state/selectors';

class AuthenticatedRoute extends Component {
  render() {
    return (
      <Route
        path={this.props.path}
        render={() => (
          this.props.isUserLoggedIn ? (<this.props.Component />) : (<Redirect to={this.props.redirectUnauthorizedUserTo} />)
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: isUserLoggedIn
  }
}

const connected = connect(mapStateToProps)(AuthenticatedRoute);

export { connected as AuthenticatedRoute };