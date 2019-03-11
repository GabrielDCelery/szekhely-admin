import React, { Component } from 'react';
import { authorization as authorizationService } from 'services';

export class AuthorizedComponent extends Component {
  render() {
    const bIsAuthorized = authorizationService.isAuthorized(this.props.rbacRule);
    const renderedComponent = bIsAuthorized === true ? this.props.renderAuthorizedComponent() : this.props.renderUnAuthorizedComponent();

    return (
      <React.Fragment>
        {renderedComponent}
      </React.Fragment>
    );
  }
}