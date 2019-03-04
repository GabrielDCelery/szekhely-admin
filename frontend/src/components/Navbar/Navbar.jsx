import React from 'react';
import './Navbar.css';
import NavbarItem from './NavbarItem';

export default class Navbar extends React.Component {
	render() {
		const navbarItems = [{
			label: 'Dasboard',
			icon: 'tachometer-alt',
			path: '/dashboard'
		}, {
			label: 'Contracts',
			icon: 'file-contract',
			path: '/contracts'
		}, {
			label: 'Mailing',
			icon: 'envelope-square',
			path: '/mailing'
		}, {
			label: 'Invoices',
			icon: 'file-invoice',
			path: '/invoices'
		}, {
			label: 'Statistics',
			icon: 'chart-line',
			path: '/statistics'
		}, {
			label: 'Settings',
			icon: 'cog',
			path: '/settings'
		}];

		const renderedNavbarItems = navbarItems.map((navbarItem, index) => (
			<NavbarItem key={'nav-item-' + index} label={navbarItem.label} icon={navbarItem.icon} path={navbarItem.path}/>
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