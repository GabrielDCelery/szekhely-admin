import React, { Component } from 'react';

export class OneColMain extends Component {
	render() {
		return (
			<div className="container mw-100">
				<div className="row">
					<div className="col">
						<this.props.Content />
					</div>
				</div>
			</div>
		);
	}
}