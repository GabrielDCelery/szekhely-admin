import React, { Component } from 'react';
import { logout } from 'state/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Logout extends Component {
	componentDidMount() {
		this.props.onLogout(() => {
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
	onLogout: logout
};

const connected = withRouter(connect(mapStateToProps, mapActionsToProps)(Logout));

export { connected as Logout };