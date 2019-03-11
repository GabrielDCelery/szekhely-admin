import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { AuthorizedComponent } from 'components';

export default class NavbarItemSimple extends Component {
	render() {
		return (
			<AuthorizedComponent
				rbacRule={this.props.rbacRule}
				renderAuthorizedComponent={() => (
					<li className="NavbarItem NavbarItemSimple nav-item">
						<Link
							to={this.props.path}
							className="nav-link"
							onClick={() => {
								this.props.toggleActive(this.props.id)
							}}
						>
							<div>
								<FontAwesomeIcon className="fas fa-2x" icon={this.props.icon} />
							</div>
							<div>
								{this.props.label}
							</div>
						</Link>
						<hr />
					</li>
				)}
				renderUnAuthorizedComponent={() => { }}
			/>
		);
	}
}