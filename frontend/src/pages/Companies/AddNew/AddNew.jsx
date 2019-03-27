import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddNew extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container mw-100">
					<div className="row">
						<div className="col-md-9">
							<div className="card shadow-sm">
								<div className="card-header text-center text-light bg-dark">
									<h5>Client Company Details</h5>
								</div>
								<div className="card-body">
									<form>
										<div className="container">
											<div className="form-group row">
												<label htmlFor="companyName" className="col-md-3 col-form-label">Company Name</label>
												<div className="col-md-9">
													<input type="text" className="form-control" id="companyName" />
												</div>
											</div>
											<div className="form-group row">
												<label htmlFor="companyRegistrationId" className="col-md-3 col-form-label">Registration ID</label>
												<div className="col-md-9">
													<input type="text" className="form-control" id="companyRegistrationId" />
												</div>
											</div>
											<div className="form-group row">
												<label htmlFor="companyTaxId" className="col-md-3 col-form-label">Tax ID</label>
												<div className="col-md-9">
													<input type="text" className="form-control" id="companyTaxId" />
												</div>
											</div>
											<div className="form-group row">
												<label htmlFor="companyPostcode" className="col-md-3 col-form-label">Postcode</label>
												<div className="col-md-9">
													<input type="text" className="form-control" id="companyPostcode" />
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<button type="button" className="btn btn-primary btn-lg btn-block">Client Company Details</button>
							<button type="button" className="btn btn-secondary btn-lg btn-block">Client Signatory Details</button>
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