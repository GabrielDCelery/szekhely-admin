import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClientDetails extends Component {
  render() {
    return (
      <div className="card border-2 border-black shadow-sm mb-3">
        <div className="card-header text-center text-light bg-custom-primary-gradient border-bottom-3 border-black p-4 rounded-0 custom-box-shadow-lifted">
          <h5>Client details</h5>
        </div>

        <div className="card-body border-bottom-2">
          <div className="container">
            <div className="form-group row">
              <label htmlFor="clientName" className="col-md-3 col-form-label">
                Client name
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
          <button type="button" className="btn btn-tertiary-color custom-box-shadow-lifted border-2 border-black float-left">Print Contract</button>
          <button type="button" className="btn btn-tertiary-color custom-box-shadow-lifted border-2 border-black float-right">Save Into Database</button>
          <button type="button" className="btn btn-primary custom-box-shadow-lifted border-2 border-black float-right mr-3">Preview</button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const connected = connect(mapStateToProps)(ClientDetails);

export { connected as ClientDetails };