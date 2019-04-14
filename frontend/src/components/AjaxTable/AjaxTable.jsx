import React, { Component } from 'react';
import './AjaxTable.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import { KeyupTimeout } from 'services';

class AjaxTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			numOfRecordsPerPage: 10,
			currentPageIndex: 0,
			filterTerm: ''
		};
		this.keyupTimeout = new KeyupTimeout();
		this.renderTableBody = this.renderTableBody.bind(this);
		this.renderTableHead = this.renderTableHead.bind(this);
		this.renderPagination = this.renderPagination.bind(this);
		this.changePageIndex = this.changePageIndex.bind(this);
		this.changeFilterTerm = this.changeFilterTerm.bind(this);
		this.changeNumOfRecordPerPage = this.changeNumOfRecordPerPage.bind(this);
	}

	componentDidMount() {
		return this.props.requestNewDataRows(this.state);
	}

	changeFilterTerm(event) {
		this.setState({
			...this.state,
			...{
				currentPageIndex: 0,
				filterTerm: event.target.value
			}
		}, () => {
			this.keyupTimeout.waitAndExecuteCb(() => {
				return this.props.requestNewDataRows(this.state);
			});
		});
	}

	changeNumOfRecordPerPage(event) {
		this.setState({
			...this.state,
			...{
				currentPageIndex: 0,
				numOfRecordsPerPage: parseInt(event.target.value, 10)
			}
		}, () => {
			return this.props.requestNewDataRows(this.state);
		});
	}

	changePageIndex(index) {
		this.setState({
			...this.state,
			...{ currentPageIndex: index }
		}, () => {
			return this.props.requestNewDataRows(this.state);
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
										scope='col'
									>
										<FontAwesomeIcon
											className="fas fa-2x external-url"
											icon='ellipsis-h'
											onClick={() => {
												this.props.history.push(columnConfig['url'], columnConfig.value(row))
											}}
										/>
									</td>
								);
							} else {
								return (<td key={`td-${colIndex}`} scope='col'>{row[columnConfig['field']]}</td>);
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

	renderPagination(numOfTotalRecords, labels) {
		const { currentPageIndex, numOfRecordsPerPage } = this.state;
		const numOfPages = Math.ceil(numOfTotalRecords / numOfRecordsPerPage);
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
						{labels.previous}
					</a>
				</li>
				{numOfPages === 0 ? null : new Array(numOfPages).fill(null).map((elem, index) => (
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
						{labels.next}
					</a>
				</li>
			</ul>
		)
	}

	render() {
		const { columnConfigs, dataRows, labels, numOfTotalRecords } = this.props;
		const renderedTableHead = this.renderTableHead(columnConfigs);
		const renderedTableBody = this.renderTableBody(columnConfigs, dataRows);
		const renderedPagination = this.renderPagination(numOfTotalRecords, labels);

		return (
			<div className="AjaxTable card border-2 border-black shadow-sm">
				<div className="card-header text-center text-light bg-custom-blue-gradient border-bottom-3 border-black p-4 rounded-0 custom-box-shadow-lifted">
					<h5>{labels.title}</h5>
				</div>

				<div className="card-body border-bottom-2">
					<div className="row">
						<div className="col-5">
							<div className="form-group row">
								<label className="col-sm-8" htmlFor="numberOfRecords">{labels.numOfRecordsPerPage}</label>
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
						<div className="col-5">
							<div className="form-group row">
								<label className="col-sm-2" htmlFor="search">{labels.search}</label>
								<input
									className="form-control col-sm-10"
									id="search"
									type="search"
									value={this.state.filterTerm}
									onChange={this.changeFilterTerm}
								/>
							</div>
						</div>
						<div className="col-2">
							<div className="form-group row">
								<div className="text-center w-100">
									{this.props.isAjaxRequestInProgress ?
										(<FontAwesomeIcon
											className="fas fa-circle-notch fa-spin fa-2x"
											icon='circle-notch' />
										) : null}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="card-footer border-bottom-2 p-1 custom-bg-black custom-box-shadow-lifted">
					{renderedPagination}
				</div>

				<div className="card-body border-bottom-2">
					{<table className="table table-sm table-striped">
						{renderedTableHead}
						{renderedTableBody}
					</table>}
				</div>

				<div className="card-footer p-1 custom-bg-black custom-box-shadow-lifted">
					{renderedPagination}
				</div>

			</div>
		);
	}
}

const connected = withRouter(AjaxTable);

export { connected as AjaxTable };

/*(<div className="text-center">
			<FontAwesomeIcon className="fas fa-spinner fa-spin fa-5x" icon='spinner' />
		</div>)*/