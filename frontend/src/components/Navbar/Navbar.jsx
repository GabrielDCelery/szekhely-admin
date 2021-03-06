import React, { Component } from 'react';
import { AuthorizedComponent } from 'components';
import './Navbar.scss';
import { NavbarItem } from './NavbarItem';
import PropTypes from 'prop-types';

export class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.toggleActive = this.toggleActive.bind(this);
	}

	toggleActive(id) {
		this.setState({ activeIndex: id });
	}

	render() {
		return (
			<ul className="Navbar nav flex-column bg-gradient-primary shadow border-right-2 border-black">
				{this.props.navbarItemConfigs.map((navbarItemConfig, index) => (
					<AuthorizedComponent
						key={'navbar-item-' + index}
						rbacRule={navbarItemConfig.rbacRule}
						AuthorizedComponent={
							<NavbarItem
								id={index}
								label={navbarItemConfig.label}
								icon={navbarItemConfig.icon}
								path={navbarItemConfig.path}
								children={navbarItemConfig.children}
								toggleActive={this.toggleActive}
								bIsActive={this.state.activeIndex === index}
								activeUrl={this.context.router.route.location.pathname}
							/>}
						UnAuthorizedComponent={null}
					/>
				))}
			</ul>
		);
	}
}

Navbar.contextTypes = {
	router: PropTypes.object
};