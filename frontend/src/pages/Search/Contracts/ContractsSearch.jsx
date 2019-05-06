import React, { Component } from 'react';
import {
  SecondaryCard,
  AjaxProcessButton,
  ReduxFormInput,
  ReduxFormDate,
  ReduxFormCheckbox
} from 'components';
import { reduxForm } from 'redux-form';

class ContractsSearch extends Component {
  render() {
    const { handleSubmit, submitting, getContracts } = this.props;

    return (
      <SecondaryCard
        title="Search"
        Body={
          <form onSubmit={handleSubmit(getContracts)}>
            <ReduxFormInput id="clientName" label="Client name" />
            <ReduxFormInput id="clientSignatoryName" label="Client signatory name" />
            <ReduxFormDate id="contractExpiryFrom" label="Contract expiry from" />
            <ReduxFormDate id="contractExpiryTill" label="Contract expiry till" />
            <ReduxFormCheckbox id="bLiveContract" label="Live Contract" />
            <ReduxFormCheckbox id="bExpiredContract" label="Expired Contract" />
            <AjaxProcessButton
              className="btn btn-tertiary-color btn-block custom-box-shadow-lifted border-2 border-black"
              label='Search'
              type='submit'
              bIsProcessing={submitting}
            />
          </form>
        }
      />
    )
  }
}

const connected = reduxForm({
  form: 'contractsSearch',
  enableReinitialize: true
})(ContractsSearch);

export { connected as ContractsSearch };