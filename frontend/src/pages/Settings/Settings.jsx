import React, { Component } from 'react';
import { connect } from 'react-redux';
import { labels, userSettings } from 'state/selectors';
import { changeUserSettings } from 'state/actions';

class Settings extends Component {
	constructor(props) {
		super(props);
		this.changeLanguage = this.changeLanguage.bind(this);
	}

	changeLanguage (event) {
		this.props.changeUserSettings({
			...this.props.userSettings,
			...{ language: event.target.value }
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className="container">
					<form>
						<div className="form-group row">
							<label htmlFor="language" className="col-sm-2">{this.props.labels.language}</label>
							<select
								className="form-control col-sm-10"
								id="language"
								value={this.props.userSettings.language}
								onChange={this.changeLanguage} 
							>
								<option value="EN">{this.props.labels.languageEnglish}</option>
								<option value="HU">{this.props.labels.languageHungarian}</option>
							</select>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		labels: labels(state),
		userSettings: userSettings(state)
	}
}

const mapActionsToProps = {
	changeUserSettings: changeUserSettings
};

const connected = connect(mapStateToProps, mapActionsToProps)(Settings);

export { connected as Settings };