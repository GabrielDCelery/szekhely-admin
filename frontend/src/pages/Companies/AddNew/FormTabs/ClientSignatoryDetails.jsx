import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capitalizedLabels } from 'state/selectors';

class ClientSignatoryDetails extends Component {
  render() {
    return (
      <div className="card shadow-sm">
        <div className="card-header text-center text-light bg-teal-gradient border-bottom-5 border-black">
          <h5>{this.props.capitalizedLabels.clientSignatoryDetails}</h5>
        </div>

        <div className="card-body border-bottom-2">
          <div className="container">
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
          <button type="button" className="btn btn-action float-left">Print Contract</button>
          <button type="button" className="btn btn-action float-right">Save Into Database</button>
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

const connected = connect(mapStateToProps)(ClientSignatoryDetails);

export { connected as ClientSignatoryDetails };