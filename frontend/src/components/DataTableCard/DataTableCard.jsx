import React, { Component } from 'react';

export class DataTableCard extends Component {
	constructor(props) {
		super(props);

		this.renderRows = this.renderRows.bind(this);
		this.renderColumns = this.renderColumns.bind(this);
	}

	renderRows(columnFields, rows) {
		return rows.map((row, index) => (
			<tr key={`tr-${index}`}>
				{columnFields.map(columnField => (
					<td key={`td-${index}`}>{row[columnField]}</td>
				))}
			</tr>
		));
	}

	renderColumns(columns) {
		return columns.map((column, index) => (
			<th key={`th-head-${index}`} scope='col'>{column.label}</th>
		));
	}

	render() {
		const columnFields = this.props.data.columns.map(column => {
			return column.field;
		});
		const columns = this.renderColumns(this.props.data.columns);
		const rows = this.renderRows(columnFields, this.props.data.rows);

		return (
			<div className="card shadow-sm">
				<div className="card-header text-center text-light bg-teal-gradient border-bottom-5 border-black">
					<h5>{this.props.title}</h5>
				</div>

				<div className="card-body border-bottom-2">
					<div className="row">
						<div className="col">
							<div className="form-group">
								<label for="exampleFormControlSelect1">Number of records per page</label>
								<select className="form-control" id="exampleFormControlSelect1">
									<option>10</option>
									<option>25</option>
									<option>50</option>
									<option>100</option>
								</select>
							</div>
						</div>
						<div className="col">
							<input className="form-control" type="search" placeholder="Search" />
						</div>
					</div>

					<table className="table table-sm table-striped">
						<thead>
							<tr>
								{columns}
							</tr>
						</thead>
						<tbody>
							{rows}
						</tbody>
					</table>
				</div>

				<div className="card-footer">
					<ul className="pagination justify-content-end">
						<li className="page-item disabled">
							<a className="page-link" href="#" tabIndex="-1">Previous</a>
						</li>
						<li className="page-item"><a className="page-link" href="#">1</a></li>
						<li className="page-item"><a className="page-link" href="#">2</a></li>
						<li className="page-item"><a className="page-link" href="#">3</a></li>
						<li className="page-item">
							<a className="page-link" href="#">Next</a>
						</li>
					</ul>
				</div>

			</div>
		);
	}
}