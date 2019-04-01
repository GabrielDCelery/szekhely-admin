import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capitalizedLabels } from 'state/selectors';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ContractsTable } from './ContractsTable';

class Contracts extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mw-100">
          <div className="row">
            <div className="col-md-9">
              <ContractsTable />
            </div>

            <div className="col-md-3">

              <div className="card shadow-sm mb-2">
                <div className="card-header text-center text-light bg-teal-gradient border-bottom-5 border-black">
                  Search
                </div>
                <div className="card-body">

                  <div className="form-group">
                    <label for="clientName">Client Name</label>
                    <input type="text" className="form-control form-control-sm" id="clientName" />
                  </div>

                  <div className="form-group">
                    <label for="clientSignatoryName">Client Signatory Name</label>
                    <input type="text" className="form-control form-control-sm" id="clientSignatoryName" />
                  </div>

                  <div className="form-group">
                    <label for="contractExpiryFrom">Contract Expiry From</label>
                    <DatePicker id="contractExpiryFrom" className='form-control' />
                  </div>

                  <div className="form-group">
                    <label for="contractExpiryTill">Contract Expiry Till</label>
                    <DatePicker id="contractExpiryTill" className='form-control' />
                  </div>

                  <div className="form-group">
                    <label for="bContractStatus">Contract Status</label>
                    <select multiple className="form-control form-control-sm" id="bContractStatus">
                      <option>Live</option>
                      <option>Terminated</option>
                    </select>
                  </div>



                  <button type="button" className="btn btn-primary btn-block">Search</button>
                </div>
              </div>

              <div className="card shadow-sm mb-2">
                <div className="card-header text-center text-light bg-teal-gradient border-bottom-5 border-black">
                  Saved Views
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <button type="button" className="btn btn-primary btn-block">Remove View</button>
                  <hr />
                  <div className="form-group">
                    <input type="text" className="form-control" id="" />
                  </div>
                  <button type="button" className="btn btn-primary btn-block">Save New View</button>
                </div>
              </div>

              <div className="card shadow-sm mb-2">
                <div className="card-header text-center text-light bg-teal-gradient border-bottom-5 border-black">
                  Fields
                </div>
                <div className="card-body">
                  test
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

const connected = connect(mapStateToProps, mapActionsToProps)(Contracts);

export { connected as Contracts };