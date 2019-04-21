import React, { Component } from 'react';
import { DataTable } from 'components';
import { connect } from 'react-redux';
import { getClientsAction } from 'state';

class QuickSearchTable extends Component {
  componentDidMount() {
    this.props.getClients();
  }

  render() {
    return (
      <DataTable
        title='Quick search'
        columnConfigs={this.props.columnConfigs}
        dataRows={this.props.dataRows}
        isAjaxRequestInProgress={this.props.isAjaxRequestInProgress}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    columnConfigs: state.dataTablesConfigs.clients,
    dataRows: state.clients.records,
    isAjaxRequestInProgress: state.clients.isAjaxRequestInProgress
  }
}

const mapActionsToProps = {
  getClients: getClientsAction
};

const connected = connect(mapStateToProps, mapActionsToProps)(QuickSearchTable);

export { connected as QuickSearchTable };