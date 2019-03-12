import _ from 'lodash-core';
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path={this.props.to} component={this.props.Component} />
      </React.Fragment>
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

/*{this.props.isUserLoggedIn === true ? <this.props.Component /> : <Redirect to={this.props.redirectTo} />}*/