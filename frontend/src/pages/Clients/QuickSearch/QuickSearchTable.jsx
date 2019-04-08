import React, { Component } from 'react';
import { DataTableCard } from 'components';
import { connect } from 'react-redux';
import { getQuickClientList } from 'state/actions';

class QuickSearchTable extends Component {
  componentDidMount() {
    this.props.onGetQuickClientList();
  }

  render() {
    return (
      <DataTableCard
        title='Quick Search'
        data={this.props.clients}
        isAjaxRequestInProgress={this.props.isAjaxRequestInProgress}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients.data,
    isAjaxRequestInProgress: state.clients.isAjaxRequestInProgress
  }
}

const mapActionsToProps = {
  onGetQuickClientList: getQuickClientList
};

const connected = connect(mapStateToProps, mapActionsToProps)(QuickSearchTable);

export { connected as QuickSearchTable };