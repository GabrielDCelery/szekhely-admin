import React from 'react';
import './NavbarItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class NavbarItem extends React.Component {
	render() {
		return (
			<React.Fragment>
				<li className="NavbarItem nav-item">
					<a className="nav-link" href="#">
						<div>
							<FontAwesomeIcon icon={this.props.icon} />
						</div>
						<div>
							{this.props.label}
						</div>
					</a>
				</li>
			</React.Fragment>
		);
	}
}