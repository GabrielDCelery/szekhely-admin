import _ from 'lodash-core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authorization as authorizationService } from 'services';

class AuthorizedComponent extends Component {
  render() {
    const bIsAuthorized = authorizationService.isAuthorized(this.props.userAuthorizedRules, this.props.rbacRule);
    const renderedComponent = bIsAuthorized === true ? this.props.renderAuthorizedComponent() : this.props.renderUnAuthorizedComponent();

    return (
      <React.Fragment>
        {renderedComponent}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userAuthorizedRules: _.get(state, ['user', 'rules'], [])
  }
}

const connected = connect(mapStateToProps)(AuthorizedComponent);

export { connected as AuthorizedComponent };