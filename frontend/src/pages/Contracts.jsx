import React, { Component } from 'react';
import { Navbar } from 'components';

export class Contracts extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="w-10">
					<Navbar />
				</div>
				<div className="w-90">
					<h1>Contracts</h1>
				</div>
			</React.Fragment>
		);
	}
}