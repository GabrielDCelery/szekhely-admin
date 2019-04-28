import React, { Component } from 'react';

export class TwoColMain extends Component {
	render() {
		return (
			<div className="container mw-100">
				<div className="row">
					<div className="col-md-9">
						{this.props.Content}
					</div>
					<div className="col-md-3">
						{this.props.SideBar}
					</div>
				</div>
			</div>
		);
	}
}