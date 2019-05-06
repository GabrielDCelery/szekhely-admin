import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class AjaxProcessButton extends Component {
  render() {
    const {
      type,
      className,
      bIsProcessing,
      onClick,
      label
    } = this.props;

    return (
      <button
        {...{ type: type, className: className }}
        disabled={bIsProcessing}
        onClick={onClick || (() => { })}
      >
        {bIsProcessing ? (<FontAwesomeIcon className="fas fa-spinner fa-spin" icon="spinner" />) : label}
      </button>
    );
  }
}