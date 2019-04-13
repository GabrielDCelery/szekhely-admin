import _ from 'lodash';
import React, { Component } from 'react';
import { filterRowsUsingSearchTerm } from './dataTableMethods';
import './DataTableCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';

class DataTableCard extends Component {
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
					<tr key={`tr-${rowIndex}`}>
						{columnConfigs.map((columnConfig, colIndex) => {
							if (columnConfig['type'] === 'url') {
								return (
									<td
										key={`td-${colIndex}`}
									>
										<FontAwesomeIcon
											className="fas fa-2x external-url w-100"
											icon='ellipsis-h'
											onClick={() => {
												this.props.history.push(columnConfig['url'], columnConfig.value(row))
											}}
										/>
									</td>
								);
							} else {
								return (<td key={`td-${colIndex}`}>{row[columnConfig['field']]}</td>);
							}
						})}
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
						<th key={`th-head-${index}`} scope='col'>{columnConfig.label}</th>
					))}
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
					<a
						className="page-link"
						href="#"
						tabIndex="-1"
						onClick={() => {
							if (bIsFirstPage) {
								return;
							}

							return this.changePageIndex(currentPageIndex - 1)
						}}
					>
						Previous
					</a>
				</li>
				{new Array(numOfPages).fill(null).map((elem, index) => (
					<li
						key={`pagination-${index}`}
						className="page-item"
					>
						<a
							className={['page-link', currentPageIndex === index ? 'active' : ''].join(' ')}
							href="#"
							onClick={() => {
								this.changePageIndex(index)
							}}
						>{index + 1}
						</a>
					</li>
				))}
				<li className={['page-item', bLastPage === true ? 'disabled' : ''].join(' ')}>
					<a
						className="page-link"
						href="#"
						onClick={() => {
							if (bLastPage) {
								return;
							}

							return this.changePageIndex(currentPageIndex + 1)
						}}
					>
						Next
					</a>
				</li>
			</ul>
		)
	}

	render() {
		const { columnConfigs, dataRows } = this.props;
		const { currentPageIndex, numOfRecordsPerPage, filterTerm } = this.state;
		const renderedTableHead = this.renderTableHead(columnConfigs);
		const filteredRows = filterRowsUsingSearchTerm(dataRows, filterTerm);
		const slicedRows = _.slice(filteredRows, currentPageIndex * numOfRecordsPerPage, ((currentPageIndex + 1) * numOfRecordsPerPage));
		const renderedTableBody = this.renderTableBody(columnConfigs, slicedRows);
		const numOfPages = Math.ceil(filteredRows.length / numOfRecordsPerPage);
		const renderedPagination = this.renderPagination(numOfPages);

		return (
			<div className="DataTableCard card border-2 border-black shadow-sm">
				<div className="card-header text-center text-light bg-custom-blue-gradient border-bottom-3 border-black p-4 rounded-0 custom-box-shadow-lifted">
					<h5>{this.props.title}</h5>
				</div>

				<div className="card-body border-bottom-2">
					<div className="row">
						<div className="col">
							<div className="form-group row">
								<label className="col-sm-8" htmlFor="numberOfRecords">Number of records per page</label>
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
								<label className="col-sm-2" htmlFor="search">Search</label>
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
						(<div className="text-center">
							<FontAwesomeIcon className="fas fa-spinner fa-spin fa-5x" icon='spinner' />
						</div>) :
						(<table className="table table-sm table-striped">
							{renderedTableHead}
							{renderedTableBody}
						</table>)}
				</div>

				<div className="card-footer p-1 custom-bg-black custom-box-shadow-lifted">
					{renderedPagination}
				</div>

			</div>
		);
	}
}

const connected = withRouter(DataTableCard);

export { connected as DataTableCard };