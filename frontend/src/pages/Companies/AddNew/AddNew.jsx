import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capitalizedLabels } from 'state/selectors';
import { ClientDetails } from './FormTabs';

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
	}

	changeActiveFormTab(_pageIndex) {
		this.setState({
			...this.state,
			...{ activePageIndex: _pageIndex }
		});
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
								<ClientDetails
									passedState={this.state}
									handleChangeWrapper={this.handleChangeWrapper}
								/>
							</form>
						</div>

						<div className="col-md-3">
							<div className="card shadow-sm mb-2">
								<div className="card-body">
									<button type="button" className="btn btn-dark-purple btn-block">{this.props.capitalizedLabels.clientCompanyDetails}</button>
									<button type="button" className="btn btn-secondary btn-block">Client Signatory Details</button>
									<button type="button" className="btn btn-secondary btn-block">Services</button>
									<button type="button" className="btn btn-secondary btn-block">Contact Details</button>
									<button type="button" className="btn btn-secondary btn-block">Payment Details</button>
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