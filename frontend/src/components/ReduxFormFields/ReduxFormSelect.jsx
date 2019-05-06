import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

export class ReduxFormSelect extends Component {
  render() {
    const {
      id,
      label,
      options
    } = this.props;

    return (
      <div className="form-group">
        {label ? <label htmlFor={id}>{this.context.t(label)}</label> : null}
        <Field
          id={id}
          type="text"
          className="form-control form-control-sm"
          name={id}
          component="select"
        >
          {options.map(({ value, label, bSelected }, index) => (
            <option
              key={`select-${index}`}
              value={value}
            >
              {this.context.t(label)}
            </option>
          ))}
        </Field>
      </div>
    )
  }
}

ReduxFormSelect.contextTypes = {
  t: PropTypes.func.isRequired
};