import React, { Component } from 'react';
import { logoutAction } from 'state';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Logout extends Component {
	componentDidMount() {
		this.props.logout(() => {
			return this.props.history.push('/login');
		});
	}

	render() {
		return (
			<React.Fragment>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return state;
}

const mapActionsToProps = {
	logout: logoutAction
};

const connected = withRouter(connect(mapStateToProps, mapActionsToProps)(Logout));

export { connected as Logout };