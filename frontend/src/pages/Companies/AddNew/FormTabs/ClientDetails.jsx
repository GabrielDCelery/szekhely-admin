import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capitalizedLabels } from 'state/selectors';

class ClientDetails extends Component {
  render() {
    return (
      <div className="card shadow-sm">
        <div className="card-header text-center text-light bg-light-red-gradient border-bottom-2 border-black">
          <h5>{this.props.capitalizedLabels.clientCompanyDetails}</h5>
        </div>

        <div className="card-body">
          <div className="container">
            <div className="form-group row">
              <label htmlFor="clientName" className="col-md-3 col-form-label">
                {this.props.capitalizedLabels.clientName}
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="clientName"
                  value={this.props.passedState.clientName}
                  onChange={this.props.handleChangeWrapper('clientName')}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="clientRegistrationId" className="col-md-3 col-form-label">Registration ID</label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="clientRegistrationId"
                  value={this.props.passedState.clientRegistrationId}
                  onChange={this.props.handleChangeWrapper('clientRegistrationId')}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="clientTaxId" className="col-md-3 col-form-label">Tax ID</label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="clientTaxId"
                  value={this.props.passedState.clientTaxId}
                  onChange={this.props.handleChangeWrapper('clientTaxId')}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="clientPostcode" className="col-md-3 col-form-label">Postcode</label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="clientPostcode"
                  value={this.props.passedState.clientPostcode}
                  onChange={this.props.handleChangeWrapper('clientPostcode')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card-footer clearfix">
          <button type="button" className="btn btn-dark-purple float-left">Print Contract</button>
          <button type="button" className="btn btn-dark-purple float-right">Save Into Database</button>
          <button type="button" className="btn btn-primary float-right mr-3">Preview</button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    capitalizedLabels: capitalizedLabels(state)
  }
}

const connected = connect(mapStateToProps)(ClientDetails);

export { connected as ClientDetails };