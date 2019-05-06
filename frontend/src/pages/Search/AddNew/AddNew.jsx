import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ClientDetails, ClientSignatoryDetails } from './FormTabs';

function FormTabButton(props) {
	return (
		<button
			type="button"
			className={['btn', 'btn-block', 'custom-box-shadow-lifted', 'border-2', 'border-black', props.bIsActive ? 'btn-primary' : 'btn-secondary'].join(' ')}
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
							<div className="card border-2 border-black shadow-sm mb-3">
								<div className="card-body">
									{[
										'Client Details',
										'Client Signatory Details',
										'Services',
										'Contact Details',
										'Payment Details'
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
	return state;
}

const mapActionsToProps = {
};

const connected = connect(mapStateToProps, mapActionsToProps)(AddNew);

export { connected as AddNew };