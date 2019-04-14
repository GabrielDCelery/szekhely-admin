import React, { Component } from 'react';
import { DataTable } from 'components';
import { connect } from 'react-redux';
import { getQuickClientList } from 'state/actions';

class QuickSearchTable extends Component {
  componentDidMount() {
    this.props.getQuickClientList();
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
    columnConfigs: state.dataTablesQuickSearch.columnConfigs,
    dataRows: state.dataTablesQuickSearch.dataRows,
    isAjaxRequestInProgress: state.dataTablesQuickSearch.isAjaxRequestInProgress
  }
}

const mapActionsToProps = {
  getQuickClientList: getQuickClientList
};

const connected = connect(mapStateToProps, mapActionsToProps)(QuickSearchTable);

export { connected as QuickSearchTable };