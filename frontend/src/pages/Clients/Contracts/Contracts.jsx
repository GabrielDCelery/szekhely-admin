import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TwoColMain, DataTable } from 'components';
import { getContracts } from 'state/actions';

class Contracts extends Component {
  constructor(props) {
    super(props);

    this.getContracts = this.getContracts.bind(this);
  }

  getContracts() {
    return this.props.getContracts();
  }

  render() {
    return (
      <React.Fragment>
        <TwoColMain
          Content={() => (
            <DataTable
              title='Contracts'
              columnConfigs={this.props.columnConfigs}
              dataRows={this.props.dataRows}
              isAjaxRequestInProgress={this.props.isAjaxRequestInProgress}
            />
          )}
          SideBar={() => (
            <div>
              <div className="card shadow-sm mb-2">
                <div className="card-header text-center text-light bg-teal-gradient border-bottom-5 border-black">
                  Search
                </div>
                <div className="card-body">

                  <div className="form-group">
                    <label htmlFor="clientName">Client name</label>
                    <input type="text" className="form-control form-control-sm" id="clientName" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="clientSignatoryName">Client signatory name</label>
                    <input type="text" className="form-control form-control-sm" id="clientSignatoryName" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contractExpiryFrom">Contract expiry from</label>
                    <DatePicker id="contractExpiryFrom" className='form-control' />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contractExpiryTill">Contract expiry till</label>
                    <DatePicker id="contractExpiryTill" className='form-control' />
                  </div>

                  <div className="form-group">
                    <label htmlFor="bContractStatus">Contract status</label>
                    <select multiple className="form-control form-control-sm" id="bContractStatus">
                      <option>Live</option>
                      <option>Terminated</option>
                    </select>
                  </div>



                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={() => {
                      return this.getContracts();
                    }}
                  >
                    Search
                  </button>
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
          )}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    columnConfigs: state.dataTablesContracts.columnConfigs,
    dataRows: state.dataTablesContracts.dataRows,
    isAjaxRequestInProgress: state.dataTablesContracts.isAjaxRequestInProgress
  }
}

const mapActionsToProps = {
  getContracts: getContracts
};

const connected = connect(mapStateToProps, mapActionsToProps)(Contracts);

export { connected as Contracts };