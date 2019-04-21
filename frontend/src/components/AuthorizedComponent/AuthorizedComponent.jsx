import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isUserAuthorizedSelector } from 'state';

class AuthorizedComponent extends Component {
  render() {
    const renderedComponent = this.props.isUserAuthorized === true ? this.props.renderAuthorizedComponent() : this.props.renderUnAuthorizedComponent();

    return (
      <React.Fragment>
        {renderedComponent}
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