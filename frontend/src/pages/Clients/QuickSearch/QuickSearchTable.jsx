import React, { Component } from 'react';
import { DataTable } from 'components';
import { connect } from 'react-redux';
import { getQuickClientList } from 'state/actions';
import { quickSearchLabels, quickSearchColumnConfigs } from 'state/selectors';

class QuickSearchTable extends Component {
  componentDidMount() {
    this.props.getQuickClientList();
  }

  render() {
    return (
      <DataTable
        labels={this.props.labels}
        columnConfigs={this.props.columnConfigs}
        dataRows={this.props.dataRows}
        isAjaxRequestInProgress={this.props.isAjaxRequestInProgress}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    labels: quickSearchLabels(state),
    columnConfigs: quickSearchColumnConfigs(state),
    dataRows: state.dataTablesQuickSearch.dataRows,
    isAjaxRequestInProgress: state.dataTablesQuickSearch.isAjaxRequestInProgress
  }
}

const mapActionsToProps = {
  getQuickClientList: getQuickClientList
};

const connected = connect(mapStateToProps, mapActionsToProps)(QuickSearchTable);

export { connected as QuickSearchTable };