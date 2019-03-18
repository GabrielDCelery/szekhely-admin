import React, { Component } from 'react';
import { AuthorizedComponent } from 'components';
import { router } from 'services';
import './Navbar.scss';
import { NavbarItem } from './NavbarItem';

const NAVBAR_CONFIG = router.createNavBarConfig();

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
			<ul className="Navbar nav flex-column bg-gradient-primary">
				{NAVBAR_CONFIG.map((navbarItemConfig, index) => (
					<AuthorizedComponent
						key={'navbar-item-' + index}
						rbacRule={navbarItemConfig.rbacRule}
						renderAuthorizedComponent={() => (
							<NavbarItem
								id={index}
								label={navbarItemConfig.label}
								icon={navbarItemConfig.icon}
								path={navbarItemConfig.path}
								children={navbarItemConfig.children}
								toggleActive={this.toggleActive}
								bIsActive={this.state.activeIndex === index}
							/>
						)}
						renderUnAuthorizedComponent={() => { }}
					/>
				))}
			</ul>
		);
	}
}
