import React, { Component } from 'react';
import {
  SecondaryCard,
  ReduxFormSelect,
  AjaxProcessButton
} from 'components';
import { reduxForm } from 'redux-form';

class ContractsSavedViews extends Component {
  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <SecondaryCard
        title="Saved Views"
        Body={
          <form onSubmit={handleSubmit(() => { })}>
            <ReduxFormSelect
              id="exampleFormControlSelect1"
              options={[{
                value: 'Live Contracts',
                label: 'Live Contracts'
              }]}
            />

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
  form: 'contractsSavedViews'
})(ContractsSavedViews);

export { connected as ContractsSavedViews };