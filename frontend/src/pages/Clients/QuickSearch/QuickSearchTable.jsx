import React, { Component } from 'react';
import { DataTableCard } from 'components';
import { connect } from 'react-redux';
import { getQuickClientList } from 'state/actions';
import { quickSearchColumnConfigs } from 'state/selectors';

class QuickSearchTable extends Component {
  componentDidMount() {
    this.props.onGetQuickClientList();
  }

  render() {
    return (
      <DataTableCard
        title='Quick Search'
        columnConfigs={this.props.quickSearchColumnConfigs}
        dataRows={this.props.dataRows}
        data={this.props.clients}
        isAjaxRequestInProgress={this.props.isAjaxRequestInProgress}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    quickSearchColumnConfigs: quickSearchColumnConfigs(state),
    dataRows: state.dataTablesQuickSearch.dataRows,
    clients: state.dataTablesQuickSearch.data,
    isAjaxRequestInProgress: state.dataTablesQuickSearch.isAjaxRequestInProgress
  }
}

const mapActionsToProps = {
  onGetQuickClientList: getQuickClientList
};

const connected = connect(mapStateToProps, mapActionsToProps)(QuickSearchTable);

export { connected as QuickSearchTable };