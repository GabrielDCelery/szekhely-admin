import React, { Component } from 'react';
import { AuthorizedComponent } from 'components';
import './Navbar.scss';
import { NavbarItem } from './NavbarItem';

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
			<ul className="Navbar nav flex-column bg-gradient-primary shadow border-right-3 border-black">
				{this.props.navbarItemConfigs.map((navbarItemConfig, index) => (
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