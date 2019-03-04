import React from 'react';
import './NavbarItem.css';
import NavbarDivider from './NavbarDivider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default class NavbarItem extends React.Component {
	render() {
		return (
			<React.Fragment>
				<li className="NavbarItem nav-item">
					<Link to={this.props.path || '/'} className="nav-link">
						<div>
							<FontAwesomeIcon icon={this.props.icon} />
						</div>
						<div>
							{this.props.label}
						</div>
					</Link>
				</li>
				<NavbarDivider />
			</React.Fragment>
		);
	}
}