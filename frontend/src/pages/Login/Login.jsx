import _ from 'lodash';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import './Login.css';
import { login } from 'state/actions';
import { withRouter } from 'react-router';
import { AjaxProcessButton } from 'components';
import { Route, Redirect } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loginEmail: null,
			loginPassword: null
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const _newState = { ...this.state };

		_newState[event.target.id] = event.target.value;

		return this.setState(_newState);
	}

	handleSubmit(event) {
		event.preventDefault();

		return this.props.onLogin(this.state.loginEmail, this.state.loginPassword, () => {
			return this.props.history.push('/');
		});
	}

	render() {
		return (
			<React.Fragment>
				{this.props.isUserLoggedIn ? (<Redirect to='/' />) : (
					<React.Fragment>
						<div className="Login d-flex justify-content-center align-items-center w-100">
							<div className="card bg-light w-25">
								<div className="card-header text-center">
									<FontAwesomeIcon className="fas fa-8x" icon='user-circle' />
								</div>
								<div className="card-body">
									<div className="container rounded">
										<div className="row justify-content-center">
											<div className="col">
												<form onSubmit={this.handleSubmit}>
													<div className="form-group row">
														<div className="col">
															<input
																type="email"
																className="form-control"
																id="loginEmail"
																placeholder="Enter email"
																onChange={this.handleChange}
															/>
														</div>
													</div>
													<div className="form-group row">
														<div className="col">
															<input
																type="password"
																className="form-control"
																id="loginPassword"
																placeholder="Password"
																onChange={this.handleChange}
																autoComplete="on	"
															/>
														</div>
													</div>
													{this.props.hasUserLoginFailed ? (
														<div className="alert alert-danger">
															Sorry, but this email and password combination does not appear to be in our database!
														</div>
													) : null}
													<AjaxProcessButton
														type="submit"
														className="btn btn-block btn-primary"
														bIsProcessing={this.props.isUserLoggingIn}
														label='Login'
													/>
													<hr />
													<div className="text-center">
														<a href="">Forgot password?</a>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		isUserLoggingIn: _.get(state, ['user', 'isLoggingIn'], false),
		hasUserLoginFailed: _.get(state, ['user', 'hasLoginFailed'], false)
	}
}

const mapActionsToProps = {
	onLogin: login
};

const connected = withRouter(connect(mapStateToProps, mapActionsToProps)(Login));

export { connected as Login };