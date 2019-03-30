import React, { Component } from 'react';
import './MainLayout.scss';

export class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="MainLayout container-fluid">
          <div className="row">
            <div className="col-md-2 p-0">
              {this.props.Navbar}
            </div>
            <div className="col-md-10 p-3">
              {this.props.Content}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}