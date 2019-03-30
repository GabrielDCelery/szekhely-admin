import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export class NavbarItemSimple extends Component {
	render() {
		return (
			<li className="NavbarItem NavbarItemSimple nav-item">
				<Link
					to={this.props.path}
					className={this.props.bIsActive ? 'w-100 nav-link active' : 'w-100 nav-link'}
					onClick={() => {
						this.props.toggleActive(this.props.id)
					}}
				>
					<FontAwesomeIcon className="fas fa-2x" icon={this.props.icon} />
					<span className="p-2">{this.props.label}</span>
				</Link>
				<hr />
			</li>
		);
	}
}