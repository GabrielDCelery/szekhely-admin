import React, { Component } from 'react';

export class QuickSearchSidebar extends Component {
  render() {
    return (
      <div className="card shadow-sm mb-2">
        <div className="card-header text-center text-light bg-teal-gradient border-bottom-5 border-black">
          Search
                </div>
        <div className="card-body">

          <div className="form-group">
            <label htmlFor="clientName">Client Name</label>
            <input type="text" className="form-control form-control-sm" id="clientName" />
          </div>

          <button type="button" className="btn btn-primary btn-block">Search</button>
        </div>
      </div>
    );
  }
}