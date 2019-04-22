import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

export class Card extends Component {
  render() {
    return (
      <div className="Card card border-2 border-black shadow-sm mb-3">
        {this.props.title ? (
          <div className="card-header text-center text-light bg-custom-secondary-gradient border-bottom-2 border-black p-2 rounded-0 custom-box-shadow-lifted">
            <h6>{this.context.t(this.props.title)}</h6>
          </div>
        ) : null}
        {this.props.CardBody ? (
          <div className="card-body">
            <this.props.CardBody />
          </div>
        ) : null}
        {this.props.CardFooter ? (
          <div className="card-footer p-1 custom-bg-black custom-box-shadow-lifted">
            <this.props.CardFooter />
          </div>
        ) : null}
      </div>
    );
  }
}

Card.contextTypes = {
  t: PropTypes.func.isRequired
};