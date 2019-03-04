import React from 'react';
import './Navbar.css';
import NavbarDivider from './NavbarDivider';
import NavbarItem from './NavbarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		const navbarItems = [{
			label: 'Dasboard',
			icon: 'tachometer-alt'
		}, {
			label: 'Companies',
			icon: 'building'
		}, {
			label: 'Mailing',
			icon: 'envelope-square'
		}, {
			label: 'Invoices',
			icon: 'file-invoice'
		}, {
			label: 'Statistics',
			icon: 'chart-line'
		}];

		const renderedNavbarItems = navbarItems.map((navbarItem, index) => (
			<NavbarItem key={'nav-item-' + index} label={navbarItem.label} icon={navbarItem.icon} />
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