import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { AuthorizedComponent } from 'components';
import './NavbarItemCollapsible.scss';
import PropTypes from 'prop-types';

export class NavbarItemCollapsible extends Component {
	render() {
		console.log(this.context.router.route.location.pathname)
		return (
			<li className="NavbarItem NavbarItemCollapsible nav-item">
				<a
					href='#'
					className={this.props.bIsActive ? 'd-block w-100 nav-link active' : 'w-100 nav-link'}
					onClick={() => {
						this.props.toggleActive(this.props.id);
					}}
				>
					<FontAwesomeIcon className="fas fa-2x d-block mx-auto pt-1" icon={this.props.icon} />
					<span className="d-block p-1">{this.context.t(this.props.label)}</span>
				</a>
				{this.props.bIsActive ? (
					<div>
						{this.props.children.map((child, index) => (
							<AuthorizedComponent
								key={index}
								rbacRule={child.rbacRule}
								AuthorizedComponent={
									<Link to={child.path} className="nav-child-item">
										{this.context.t(child.label)}
									</Link>
								}
								UnAuthorizedComponent={null}
							/>
						))}
					</div>
				) : null}
			</li>
		);
	}
}

NavbarItemCollapsible.contextTypes = {
	t: PropTypes.func.isRequired,
	router: PropTypes.object
};