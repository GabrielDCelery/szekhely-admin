import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capitalizedLabels } from 'state/selectors';
import { ClientDetails, ClientSignatoryDetails } from './FormTabs';

function FormTabButton(props) {
	return (
		<button
			type="button"
			className={['btn', 'btn-block', props.bIsActive ? 'btn-active' : 'btn-secondary'].join(' ')}
			onClick={props.changeActiveFormTab}
		>
			{props.label}
		</button>
	)
}

class AddNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientName: '',
			clientRegistrationId: '',
			clientTaxId: '',
			clientPostcode: '',
			activePageIndex: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
		this.changeActiveFormTab = this.changeActiveFormTab.bind(this);
		this.changeActiveFormTabWrapper = this.changeActiveFormTabWrapper.bind(this);
	}

	changeActiveFormTab(_pageIndex) {
		this.setState({
			...this.state,
			...{ activePageIndex: _pageIndex }
		});
	}

	changeActiveFormTabWrapper(_pageIndex) {
		return () => {
			return this.changeActiveFormTab(_pageIndex);
		}
	}

	handleChange(_stateName, _newVal) {
		const _clonedState = { ...this.state };

		_clonedState[_stateName] = _newVal;

		this.setState(_clonedState);
	}

	handleChangeWrapper(_stateName) {
		const _handleFunction = _event => {
			return this.handleChange(_stateName, _event.target.value);
		}

		return _handleFunction.bind(this);
	}

	render() {
		return (
			<React.Fragment>
				<div className="container mw-100">
					<div className="row">
						<div className="col-md-9">
							<form>
								{[
									<ClientDetails
										passedState={this.state}
										handleChangeWrapper={this.handleChangeWrapper}
									/>,
									<ClientSignatoryDetails
										passedState={this.state}
										handleChangeWrapper={this.handleChangeWrapper}
									/>,
									<ClientDetails
										passedState={this.state}
										handleChangeWrapper={this.handleChangeWrapper}
									/>,
									<ClientDetails
										passedState={this.state}
										handleChangeWrapper={this.handleChangeWrapper}
									/>,
									<ClientDetails
										passedState={this.state}
										handleChangeWrapper={this.handleChangeWrapper}
									/>
								][this.state.activePageIndex]}
							</form>
						</div>

						<div className="col-md-3">
							<div className="card shadow-sm mb-2">
								<div className="card-body">
									{[
										this.props.capitalizedLabels.clientDetails,
										this.props.capitalizedLabels.clientSignatoryDetails,
										this.props.capitalizedLabels.services,
										this.props.capitalizedLabels.contactDetails,
										this.props.capitalizedLabels.paymentDetails
									].map((_label, _index) => (
										<FormTabButton
											key={`form-tab-button-${_index}`}
											bIsActive={this.state.activePageIndex === _index}
											label={_label}
											changeActiveFormTab={this.changeActiveFormTabWrapper(_index)}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		capitalizedLabels: capitalizedLabels(state)
	}
}

const mapActionsToProps = {
};

const connected = connect(mapStateToProps, mapActionsToProps)(AddNew);

export { connected as AddNew };