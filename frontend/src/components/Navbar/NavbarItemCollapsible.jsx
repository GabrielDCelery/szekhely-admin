import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './NavbarItemCollapsible.css';

export default class NavbarItemCollapsible extends Component {
	render() {
		return (
			<React.Fragment>
				<li className="NavbarItem NavbarItemCollapsible nav-item">
					<a
						href='#'
						className="nav-link"
						onClick={() => {
							this.props.toggleActive(this.props.bIsActive === true ? null : this.props.id);
						}}
					>
						<div>
							<FontAwesomeIcon icon={this.props.icon} />
						</div>
						<div>
							{this.props.label}
						</div>
					</a>
					<div className={"bg-white py-2 m-2 rounded nav-child-item-container " + (this.props.bIsActive ? 'show' : '')}>
						{this.props.children.map((child, index) => (
							<Link key={index} to={child.path} className="nav-child-item">
								{child.label}
							</Link>
						))}
					</div>
					<hr />
				</li>
			</React.Fragment>
		);
	}
}