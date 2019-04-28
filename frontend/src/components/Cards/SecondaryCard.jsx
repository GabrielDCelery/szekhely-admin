import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SecondaryCard.scss';

export class SecondaryCard extends Component {
  render() {
    const { title, Body, Footer } = this.props;

    return (
      <div className="SecondaryCard">
        <div className="card border-2 border-black shadow-sm mb-3">
          {title ?
            <div className="card-header text-center text-light bg-custom-secondary-gradient border-bottom-2 border-black p-2 rounded-0 custom-box-shadow-lifted">
              <h6>{this.context.t(title)}</h6>
            </div>
            : null}
          {Body ?
            <div className="card-body">
              {Body}
            </div>
            : null}
          {Footer ?
            <div className="card-footer p-1 custom-bg-black custom-box-shadow-lifted">
              {Footer}
            </div>
            : null}
        </div>
      </div>
    );
  }
}

SecondaryCard.contextTypes = {
  t: PropTypes.func.isRequired
};