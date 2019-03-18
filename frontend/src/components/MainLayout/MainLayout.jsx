import React, { Component } from 'react';

export class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-row">
          <div className="w-10">
            {this.props.Navbar}
          </div>
          <div className="w-90 p-3">
            {this.props.Content}
          </div>
        </div>
      </React.Fragment>
    );
  }
}