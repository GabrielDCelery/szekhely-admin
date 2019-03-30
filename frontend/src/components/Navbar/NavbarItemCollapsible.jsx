import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { AuthorizedComponent } from 'components';
import './NavbarItemCollapsible.scss';

export class NavbarItemCollapsible extends Component {
	render() {
		return (
			<li className="NavbarItem NavbarItemCollapsible nav-item">
				<a
					href='#'
					className={this.props.bIsActive ? 'w-100 nav-link active' : 'w-100 nav-link'}
					onClick={() => {
						this.props.toggleActive(this.props.id);
					}}
				>
					<FontAwesomeIcon className="fas fa-2x" icon={this.props.icon} />
					<span className="p-2">{this.props.label}</span>
				</a>
				{this.props.bIsActive ? (
					<div className="bg-white">
						{this.props.children.map((child, index) => (
							<AuthorizedComponent
								key={index}
								rbacRule={child.rbacRule}
								renderAuthorizedComponent={() => (
									<Link to={child.path} className="nav-child-item">
										{child.label}
									</Link>
								)}
								renderUnAuthorizedComponent={() => { }}
							/>
						))}
					</div>
				) : null}
				<hr />
			</li>
		);
	}
}