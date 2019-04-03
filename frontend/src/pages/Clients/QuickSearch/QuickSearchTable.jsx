import React, { Component } from 'react';
import { DataTableCard } from 'components';

export class QuickSearchTable extends Component {
  render() {
    return (
      <DataTableCard
        title='Quick Search'
        data={{
          columns: [{
            label: 'Client Name',
            field: 'clientName'
          }, {
            label: 'Status',
            field: 'status'
          }], rows: [{
            clientName: 'Mark',
            status: 'Otto'
          }, {
            clientName: 'Jacob',
            status: 'Thornton'
          }, {
            clientName: 'Larry the Bird',
            status: 'twitter'
          }]
        }}
      />
    );
  }
}