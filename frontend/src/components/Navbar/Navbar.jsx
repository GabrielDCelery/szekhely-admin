import React, { Component } from 'react';

import {
	STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT,
	STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT,
	STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH,
	STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW
} from 'services';

import './Navbar.css';

import { NavbarItem } from './NavbarItem'

const NAVBAR_ITEM_CONFIGS = [{
	label: 'Dashboard',
	icon: 'tachometer-alt',
	path: '/dashboard',
	page: 'Dashboard',
	rbacRule: STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT
}, {
	label: 'Contracts',
	icon: 'file-signature',
	path: '/contracts',
	page: 'Contracts',
	rbacRule: STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT,
	children: [{
		label: 'Search',
		path: '/contracts/search',
		rbacRule: STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH
	}, {
		label: 'Add New',
		path: '/contracts/addnew',
		rbacRule: STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW
	}]
}, {
	label: 'Mails',
	icon: 'envelope',
	path: '/mails',
	page: 'Contracts',
}, {
	label: 'Inspections',
	icon: 'file-contract',
	path: '/documents',
	page: 'Contracts',
}, {
	label: 'Messages',
	icon: 'at',
	path: '/messages',
	page: 'Mailing',
	children: [{
		label: 'Search',
		path: '/contracts/search'
	}, {
		label: 'Add New',
		path: '/contracts/addnew'
	}]
}, {
	label: 'Invoices',
	icon: 'file-invoice-dollar',
	path: '/invoices',
	page: 'Invoices'
}, {
	label: 'Statistics',
	icon: 'chart-line',
	path: '/statistics',
	page: 'Statistics'
}, {
	label: 'Settings',
	icon: 'cog',
	path: '/settings',
	page: 'Settings'
}];

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
				{NAVBAR_ITEM_CONFIGS.map((navbarItemConfig, index) => (
					<NavbarItem
						key={'nav-item-' + index}
						rbacRule={navbarItemConfig.rbacRule}
						id={index}
						label={navbarItemConfig.label}
						icon={navbarItemConfig.icon}
						path={navbarItemConfig.path}
						children={navbarItemConfig.children}
						toggleActive={this.toggleActive}
						bIsActive={this.state.activeIndex === index}
					/>
				))}
			</ul>
		);
	}
}
