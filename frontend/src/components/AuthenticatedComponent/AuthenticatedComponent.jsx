import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isUserLoggedInSelector } from 'state';

class AuthenticatedComponent extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isUserLoggedIn ? this.props.Component : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: isUserLoggedInSelector(state)
  }
}

const connected = connect(mapStateToProps)(AuthenticatedComponent);

export { connected as AuthenticatedComponent };