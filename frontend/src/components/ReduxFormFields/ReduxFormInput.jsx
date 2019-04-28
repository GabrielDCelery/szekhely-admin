import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

const renderInput = ({ id, input, type, className, placeholder, defaultValue, meta: { touched, error } }) => (
  <div>
    <input id={id} {...input} type={type} className={className} />
    {touched && error && <span className="error">{error}</span>}
  </div>
);

export class ReduxFormInput extends Component {
  render() {
    const {
      id,
      label
    } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={id}>{this.context.t(label)}</label>
        <Field
          id={id}
          type="text"
          className="form-control form-control-sm"
          name={id}
          component={renderInput}
        />
      </div>
    )
  }
}

ReduxFormInput.contextTypes = {
  t: PropTypes.func.isRequired
};