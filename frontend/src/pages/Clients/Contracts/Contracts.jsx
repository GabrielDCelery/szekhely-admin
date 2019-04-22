import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TwoColMain, DataTable, Card, AjaxProcessButton } from 'components';
import { getContractsAction } from 'state';

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
              <div className="Card card border-2 border-black shadow-sm mb-3">
                <div className="card-header text-center text-light bg-custom-secondary-gradient border-bottom-2 border-black p-2 rounded-0 custom-box-shadow-lifted">
                  <h6>Search</h6>
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
                    <DatePicker id="contractExpiryFrom" className='form-control form-control-sm' />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contractExpiryTill">Contract expiry till</label>
                    <DatePicker id="contractExpiryTill" className='form-control form-control-sm' />
                  </div>

                  <div className="form-group">
                    <label htmlFor="bContractStatus">Contract status</label>
                    <select multiple className="form-control form-control-sm" id="bContractStatus">
                      <option>Live</option>
                      <option>Terminated</option>
                    </select>
                  </div>

                  <AjaxProcessButton
                    className="btn btn-tertiary-color btn-block custom-box-shadow-lifted border-2 border-black"
                    label='Search'
                    bIsProcessing={this.props.isAjaxRequestInProgress}
                    onClick={this.getContracts}
                  />
                </div>
              </div>

              <div className="card border-2 border-black shadow-sm mb-3">
                <div className="card-header text-center text-light bg-custom-secondary-gradient border-bottom-2 border-black p-2 rounded-0 custom-box-shadow-lifted">
                  <h6>Saved Views</h6>
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
                  <button type="button" className="btn btn-tertiary-color btn-block custom-box-shadow-lifted border-2 border-black">
                    Remove View
                  </button>
                  <hr />
                  <div className="form-group">
                    <input type="text" className="form-control" id="" />
                  </div>
                  <button type="button" className="btn btn-tertiary-color btn-block custom-box-shadow-lifted border-2 border-black">
                    Add New View
                  </button>
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
    columnConfigs: state.dataTablesConfigs.contracts,
    dataRows: state.contracts.records,
    isAjaxRequestInProgress: state.contracts.isAjaxRequestInProgress
  }
}

const mapActionsToProps = {
  getContracts: getContractsAction
};

const connected = connect(mapStateToProps, mapActionsToProps)(Contracts);

export { connected as Contracts };