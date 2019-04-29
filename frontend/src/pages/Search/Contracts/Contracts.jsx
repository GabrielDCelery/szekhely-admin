import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TwoColMain, DataTable } from 'components';
import { getContractsAction } from 'state';
import { withRouter } from 'react-router';
import { ContractsSearch } from './ContractsSearch';
import { ContractsSavedViews } from './ContractsSavedViews';

class Contracts extends Component {
  render() {
    const {
      columnConfigs,
      dataRows,
      isAjaxRequestInProgress,
      getContracts,
      history
    } = this.props;

    return (
      <TwoColMain
        Content={
          <DataTable
            title='Contracts'
            columnConfigs={columnConfigs}
            dataRows={dataRows}
            isAjaxRequestInProgress={isAjaxRequestInProgress}
            dataRowOnClick={dataRow => {
              return history.push('/client/contract', dataRow);
            }}
          />
        }
        SideBar={
          <React.Fragment>
            <ContractsSearch
              isAjaxRequestInProgress={isAjaxRequestInProgress}
              getContracts={getContracts}
            />
            <ContractsSavedViews />
          </React.Fragment>
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    columnConfigs: state.contracts.dataTableColumnConfigs,
    dataRows: state.contracts.records,
    isAjaxRequestInProgress: state.contracts.isAjaxRequestInProgress
  }
}

const mapActionsToProps = {
  getContracts: getContractsAction
};

const connected = connect(mapStateToProps, mapActionsToProps)(withRouter(Contracts));

export { connected as Contracts };