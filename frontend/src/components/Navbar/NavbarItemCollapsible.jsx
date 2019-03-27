import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { AuthorizedComponent } from 'components';
import './NavbarItemCollapsible.scss';
import { connect } from 'react-redux';
import { labels } from 'state/selectors';

class NavbarItemCollapsible extends Component {
	render() {
		return (
			<li className="NavbarItem NavbarItemCollapsible nav-item">
				<a
					href='#'
					className="nav-link"
					onClick={() => {
						this.props.toggleActive(this.props.id);
					}}
				>
					<FontAwesomeIcon className="fas fa-2x" icon={this.props.icon} />
					<span className="p-2">{this.props.label}</span>
				</a>
				{this.props.bIsActive ? (
					<div className="bg-white py-2">
						{this.props.children.map((child, index) => (
							<AuthorizedComponent
								key={index}
								rbacRule={child.rbacRule}
								renderAuthorizedComponent={() => (
									<Link to={child.path} className="nav-child-item">
										{this.props.labels[child.label]}
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

const mapStateToProps = state => {

	return {
		labels: labels(state)
	}
}

const connected = connect(mapStateToProps)(NavbarItemCollapsible);

export { connected as NavbarItemCollapsible };