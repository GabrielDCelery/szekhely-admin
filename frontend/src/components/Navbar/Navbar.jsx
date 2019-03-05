import React from 'react';
import './Navbar.css';
import NavbarItem from './NavbarItem';

export class Navbar extends React.Component {
	render() {
		const renderedNavbarItems = this.props.pageConfigs.map((pageConfig, index) => (
			<NavbarItem key={'nav-item-' + index} label={pageConfig.label} icon={pageConfig.icon} path={pageConfig.path} />
		));

		return (
			<React.Fragment>
				<ul className="Navbar nav flex-column bg-gradient-primary">
					{renderedNavbarItems}
				</ul>
			</React.Fragment>
		);
	}
}