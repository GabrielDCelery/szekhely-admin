import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { AjaxProcessButton } from 'components';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, reduxForm } from 'redux-form';

class ContractsSearch extends Component {
  render() {
    const { handleSubmit, submitting, getContracts } = this.props;

    return (
      <div className="card border-2 border-black shadow-sm mb-3">
        <div className="card-header text-center text-light bg-custom-secondary-gradient border-bottom-2 border-black p-2 rounded-0 custom-box-shadow-lifted">
          <h6>Search</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(getContracts)}>
            <div className="form-group">
              <label htmlFor="clientName">Client name</label>
              <Field
                id="clientName"
                type="text"
                className="form-control form-control-sm"
                name="clientName"
                component="input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="clientSignatoryName">Client signatory name</label>
              <Field
                id="clientSignatoryName"
                type="text"
                className="form-control form-control-sm"
                name="clientSignatoryName"
                component="input"
              />
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
              type='submit'
              bIsProcessing={submitting}
            />
          </form>
        </div>
      </div>
    )
  }
}

const connected = reduxForm({
  form: 'contractsSearch',
  enableReinitialize: true
})(ContractsSearch);

export { connected as ContractsSearch };