import React, { Component } from 'react';
import { filterRowsUsingSearchTerm, sliceRows } from './dataTableMethods';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './DataTable.scss';

export class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfRecordsPerPage: 10,
      currentPageIndex: 0,
      filterTerm: ''
    };
    this.renderTableBody = this.renderTableBody.bind(this);
    this.renderTableHead = this.renderTableHead.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
    this.changePageIndex = this.changePageIndex.bind(this);
    this.changeFilterTerm = this.changeFilterTerm.bind(this);
    this.changeNumOfRecordPerPage = this.changeNumOfRecordPerPage.bind(this);
  }

  changeFilterTerm(event) {
    this.setState({
      ...this.state,
      ...{
        currentPageIndex: 0,
        filterTerm: event.target.value
      }
    });
  }

  changeNumOfRecordPerPage(event) {
    this.setState({
      ...this.state,
      ...{
        currentPageIndex: 0,
        numOfRecordsPerPage: parseInt(event.target.value, 10)
      }
    });
  }

  changePageIndex(index) {
    this.setState({
      ...this.state,
      ...{ currentPageIndex: index }
    });
  }

  renderTableBody(columnConfigs, rows) {
    return (
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr
            key={`tr-${rowIndex}`}
            onClick={() => {
              this.props.dataRowOnClick ? this.props.dataRowOnClick(row) : (() => { })();
            }}
          >
            {columnConfigs.map((columnConfig, colIndex) => (
              <td key={`td-${colIndex}`}>{row[columnConfig['field']]}</td>)
            )}
            {this.props.dataRowOnClick ? (
              <td><FontAwesomeIcon className="fas fa-1x" icon='angle-double-right' /></td>
            ) : null}
          </tr>
        ))}
      </tbody>
    )
  }

  renderTableHead(columnConfigs) {
    return (
      <thead>
        <tr>
          {columnConfigs.map((columnConfig, index) => (
            <th key={`th-head-${index}`} scope='col'>{this.context.t(columnConfig.label)}</th>
          ))}
          {this.props.dataRowOnClick ? (
            <th></th>
          ) : null}
        </tr>
      </thead>
    )
  }

  renderPagination(numOfPages) {
    const { currentPageIndex } = this.state;
    const bIsFirstPage = currentPageIndex === 0;
    const bLastPage = (currentPageIndex + 1) === numOfPages;

    return (
      <ul className="pagination justify-content-end m-0">
        <li className={['page-item', bIsFirstPage === true ? 'disabled' : ''].join(' ')}>
          <div
            className="page-link"
            tabIndex="-1"
            onClick={() => {
              if (bIsFirstPage) {
                return;
              }

              return this.changePageIndex(currentPageIndex - 1)
            }}
          >
            {this.context.t('Previous')}
          </div>
        </li>
        {new Array(numOfPages).fill(null).map((elem, index) => (
          <li
            key={`pagination-${index}`}
            className="page-item"
          >
            <div
              className={['page-link', currentPageIndex === index ? 'active' : ''].join(' ')}
              onClick={() => {
                this.changePageIndex(index)
              }}
            >{index + 1}
            </div>
          </li>
        ))}
        <li className={['page-item', bLastPage === true ? 'disabled' : ''].join(' ')}>
          <div
            className="page-link"
            onClick={() => {
              if (bLastPage) {
                return;
              }

              return this.changePageIndex(currentPageIndex + 1)
            }}
          >
            {this.context.t('Next')}
          </div>
        </li>
      </ul>
    )
  }

  render() {
    const { columnConfigs, dataRows } = this.props;
    const { currentPageIndex, numOfRecordsPerPage, filterTerm } = this.state;
    const filteredRows = filterRowsUsingSearchTerm(dataRows, filterTerm);
    const slicedRows = sliceRows(filteredRows, numOfRecordsPerPage, currentPageIndex);
    const renderedTableHead = this.renderTableHead(columnConfigs);
    const renderedTableBody = this.renderTableBody(columnConfigs, slicedRows);
    const numOfPages = Math.ceil(filteredRows.length / numOfRecordsPerPage);
    const renderedPagination = this.renderPagination(numOfPages);

    return (
      <div className="DataTable">
        <div className={[
          'card', 'border-2',
          'border-black',
          'shadow-sm',
          this.props.dataRowOnClick ? 'custom-data-table-clickable' : ''].join(' ')}
        >
          <div className="card-header text-center text-light bg-custom-primary-gradient border-bottom-3 border-black p-4 rounded-0 custom-box-shadow-lifted">
            <h5>{this.context.t(this.props.title)}</h5>
          </div>

          <div className="card-body border-bottom-2">
            <div className="row">
              <div className="col">
                <div className="form-group row">
                  <label className="col-sm-8" htmlFor="numberOfRecords">{this.context.t('Rows per page')}</label>
                  <div className="col-sm-4">
                    <select
                      className="form-control"
                      id="numberOfRecords"
                      onChange={this.changeNumOfRecordPerPage}
                    >
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                      <option>100</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-group row">
                  <label className="col-sm-2" htmlFor="search">{this.context.t('Search')}</label>
                  <input
                    className="form-control col-sm-10"
                    id="search"
                    type="search"
                    value={this.state.filterTerm}
                    onChange={this.changeFilterTerm}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer border-bottom-2 p-1 custom-bg-black custom-box-shadow-lifted">
            {renderedPagination}
          </div>

          <div className="card-body border-bottom-2">
            {this.props.isAjaxRequestInProgress ?
              <div className="text-center">
                <FontAwesomeIcon className="fas fa-spinner fa-spin fa-5x" icon='spinner' />
              </div>
              :
              <table className="table  table-striped">
                {renderedTableHead}
                {renderedTableBody}
              </table>}
          </div>

          <div className="card-footer p-1 custom-bg-black custom-box-shadow-lifted">
            {renderedPagination}
          </div>

        </div>
      </div>
    );
  }
}

DataTable.contextTypes = {
  t: PropTypes.func.isRequired
};