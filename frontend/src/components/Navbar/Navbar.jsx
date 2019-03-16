import React, { Component } from 'react';
import { AuthorizedComponent } from 'components';

import {
	STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT,
	STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT,
	STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH,
	STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW,
	STATIC_RBAC_RULE_MAILS_PAGE_VISIT,
	STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT
} from 'services';

import './Navbar.css';

import { NavbarItem } from './NavbarItem'

const NAVBAR_ITEM_CONFIGS = [{
	label: 'User',
	icon: 'user-circle',
	path: '',
	rbacRule: null,
	children: [{
		label: 'Settings',
		path: '/settings',
		rbacRule: null
	}, {
		label: 'Logout',
		path: '/logout',
		rbacRule: null
	}]
}, {
	label: 'Dashboard',
	icon: 'tachometer-alt',
	path: '/dashboard',
	rbacRule: STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT
}, {
	label: 'Companies',
	icon: 'building',
	path: '/companies',
	rbacRule: STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT,
	children: [{
		label: 'Contracts',
		path: '/comapnies/contracts',
		rbacRule: STATIC_RBAC_RULE_CONTRACTS_ACTION_SEARCH
	}, {
		label: 'Mails',
		path: '/comapnies/mails',
		rbacRule: STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW
	}]
}, {
	label: 'Mails',
	icon: 'envelope',
	path: '/mails',
	rbacRule: STATIC_RBAC_RULE_MAILS_PAGE_VISIT
}, {
	label: 'Inspections',
	icon: 'file-contract',
	path: '/documents',
	rbacRule: STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT
}, {
	label: 'Messages',
	icon: 'at',
	path: '/messages',
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
	path: '/invoices'
}, {
	label: 'Statistics',
	icon: 'chart-line',
	path: '/statistics'
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
			<div className="w-10">
				<ul className="Navbar nav flex-column bg-gradient-primary">
					{NAVBAR_ITEM_CONFIGS.map((navbarItemConfig, index) => (
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
			</div>
		);
	}
}
