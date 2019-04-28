import React, { Component } from 'react';
import { AjaxProcessButton } from 'components';
import { Field, reduxForm } from 'redux-form';

class ContractsSavedViews extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card border-2 border-black shadow-sm mb-3">
          <div className="card-header text-center text-light bg-custom-secondary-gradient border-bottom-2 border-black p-2 rounded-0 custom-box-shadow-lifted">
            <h6>Saved Views</h6>
          </div>
          <div className="card-body">
            <div className="form-group">
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Latest Contracts</option>
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
      </React.Fragment>
    )
  }
}

const connected = reduxForm({
  form: 'contractsSavedViews'
})(ContractsSavedViews);

export { connected as ContractsSavedViews };