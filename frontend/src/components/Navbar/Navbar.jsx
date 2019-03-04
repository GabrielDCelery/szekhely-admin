import React from 'react';
import './Navbar.css';
import NavbarDivider from './NavbarDivider';

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<React.Fragment>
				<div className="Navbar">
					<ul className="nav flex-column bg-gradient-primary">
						<li className="nav-item">
							<a className="nav-link active" href="#">Dashboard</a>
						</li>
						<NavbarDivider />
						<li className="nav-item">
							<a className="nav-link active" href="#">Companies</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Mailing</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Invoices</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Statistics</a>
						</li>
						<NavbarDivider />
					</ul>
				</div>
			</React.Fragment>
		);
	}
}