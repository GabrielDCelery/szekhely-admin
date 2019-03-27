import React, { Component } from 'react';

export class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1 p-0">
              {this.props.Navbar}
            </div>
            <div className="col-md-11 p-3">
              {this.props.Content}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}