import _ from 'lodash-core';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AuthenticatedComponent extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isUserLoggedIn ? (<this.props.Component />) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: _.get(state, ['user', 'isLoggedIn'], false)
  }
}

const connected = connect(mapStateToProps)(AuthenticatedComponent);

export { connected as AuthenticatedComponent };