import _ from 'lodash-core';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class AjaxProcessButton extends Component {
  render() {
    return (
      <button {...{ type: this.props.type, className: this.props.className }} disabled={this.props.bIsProcessing}>
        {this.props.bIsProcessing ? (<FontAwesomeIcon className="fas fa-spinner fa-spin" icon='spinner' />) : this.props.label}
      </button>
    );
  }
}