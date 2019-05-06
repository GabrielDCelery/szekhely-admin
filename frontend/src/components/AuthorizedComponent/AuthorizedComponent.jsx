import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from 'state';

class AuthorizedComponent extends Component {
  render() {
    const {
      isUserAuthorized,
      AuthorizedComponent,
      UnAuthorizedComponent
    } = this.props;

    return (
      <React.Fragment>
        {isUserAuthorized ? AuthorizedComponent : UnAuthorizedComponent || null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    isUserAuthorized: isUserAuthorizedSelector(state, props)
  }
}

const connected = connect(mapStateToProps)(AuthorizedComponent);

export { connected as AuthorizedComponent };