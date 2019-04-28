import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {
	loginAction,
	isUserLoggingInSelector,
	hasUserLoginFailedSelector
} from 'state';
import { withRouter } from 'react-router';
import { AjaxProcessButton } from 'components';
import { Redirect } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loginEmail: '',
			loginPassword: ''
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

		return this.props.login(this.state.loginEmail, this.state.loginPassword, () => {
			return this.props.history.push('/');
		});
	}

	render() {
		return (
			<React.Fragment>
				{this.props.isUserLoggedIn ? (<Redirect to='/' />) : (
					<div className="Login d-flex justify-content-center align-items-center w-100">
						<div className="w-25">
							<div className="Card card border-2 border-black shadow-sm mb-3">
								<div className="card-header text-center text-light bg-custom-primary-gradient border-bottom-2 border-black p-4 rounded-0 custom-box-shadow-lifted">
									<h5>Login</h5>
								</div>
								<div className="card-body">
									<div className="container rounded">
										<div className="mb-3 text-center">
											<FontAwesomeIcon className="fas fa-8x" icon='user-circle' />
										</div>
										<hr />
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
																value={this.state.loginEmail}
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
																autoComplete="on"
																value={this.state.loginPassword}
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
														className="btn btn-tertiary-color btn-block custom-box-shadow-lifted border-2 border-black"
														bIsProcessing={this.props.isUserLoggingIn}
														label='Login'
													/>
													<hr />
													<div className="text-center">
														{/* <a href="">Forgot password?</a> */}
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		isUserLoggingIn: isUserLoggingInSelector(state),
		hasUserLoginFailed: hasUserLoginFailedSelector(state)
	}
}

const mapActionsToProps = {
	login: loginAction
};

const connected = withRouter(connect(mapStateToProps, mapActionsToProps)(Login));

export { connected as Login };