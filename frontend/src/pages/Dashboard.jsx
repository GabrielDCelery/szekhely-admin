import React from 'react';
import { Navbar } from 'components';

export class Dashboard extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="w-10">
					<Navbar />
				</div>
				<div className="w-90">
					<h1>Dashboard</h1>
				</div>
			</React.Fragment>
		);
	}
}