import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	changeUserSettingsAction, 
	userSettingsSelector 
} from 'state';
import PropTypes from 'prop-types';

class Settings extends Component {
	constructor(props) {
		super(props);
		this.changeLanguage = this.changeLanguage.bind(this);
	}

	changeLanguage(event) {
		this.props.changeUserSettings({
			...this.props.userSettings,
			...{ language: event.target.value }
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="card">
						<div className="card-body">
							<form>
								<div className="form-group row">
									<label htmlFor="language" className="col-sm-2">{this.context.t('Language')}</label>
									<select
										className="form-control col-sm-10"
										id="language"
										value={this.props.userSettings.language}
										onChange={this.changeLanguage}
									>
										<option value="en">{this.context.t('English')}</option>
										<option value="hun">{this.context.t('Hungarian')}</option>
									</select>
								</div>
							</form>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Settings.contextTypes = {
  t: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		userSettings: userSettingsSelector(state)
	}
}

const mapActionsToProps = {
	changeUserSettings: changeUserSettingsAction
};

const connected = connect(mapStateToProps, mapActionsToProps)(Settings);

export { connected as Settings };