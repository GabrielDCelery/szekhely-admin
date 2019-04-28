import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

const renderInput = ({ id, input, type, className, placeholder, defaultValue, meta: { touched, error } }) => (
  <div>
    <input id={id} {...input} type={type} className={className} />
    {touched && error && <span className="error">{error}</span>}
  </div>
);

export class ReduxFormCheckbox extends Component {
  render() {
    const {
      id,
      label
    } = this.props;

    return (
      <div className="form-group">
        <div className="form-check">
          <Field
            id={id}
            type="checkbox"
            className="form-check-input"
            name={id}
            component={renderInput}
          />
          <label htmlFor={id} className="form-check-label">{this.context.t(label)}</label>
        </div>
      </div>
    )
  }
}

ReduxFormCheckbox.contextTypes = {
  t: PropTypes.func.isRequired
};