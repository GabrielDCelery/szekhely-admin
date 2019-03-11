import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { AuthorizedComponent } from 'components';

import './NavbarItemCollapsible.css';

export default class NavbarItemCollapsible extends Component {
	render() {
		return (
			<li className="NavbarItem NavbarItemCollapsible nav-item">
				<a
					href='#'
					className="nav-link"
					onClick={() => {
						this.props.toggleActive(this.props.bIsActive === true ? null : this.props.id);
					}}
				>
					<div>
						<FontAwesomeIcon className="fas fa-2x" icon={this.props.icon} />
					</div>
					<div>
						{this.props.label}
					</div>
				</a>
				<div className={"bg-white py-2 m-2 rounded nav-child-item-container " + (this.props.bIsActive ? '' : 'hide')}>
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
				<hr />
			</li>
		);
	}
}