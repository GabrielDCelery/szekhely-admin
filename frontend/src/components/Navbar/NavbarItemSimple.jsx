import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class NavbarItemSimple extends Component {
	render() {
		return (
			<li className="NavbarItem NavbarItemSimple nav-item">
				<Link
					to={this.props.path}
					className={this.props.bIsActive ? 'd-block w-100 nav-link active' : 'w-100 nav-link'}
					onClick={() => {
						this.props.toggleActive(this.props.id)
					}}
				>
					<FontAwesomeIcon className="fas fa-2x d-block mx-auto pt-1" icon={this.props.icon} />
					<span className="d-block p-1">{this.context.t(this.props.label)}</span>
				</Link>
				<hr />
			</li>
		);
	}
}

NavbarItemSimple.contextTypes = {
  t: PropTypes.func.isRequired
};