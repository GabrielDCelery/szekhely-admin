import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Navbar.css';
import './NavbarItem.css';

import NavbarItemCollapsible from './NavbarItemCollapsible';
import NavbarItemSimple from './NavbarItemSimple';

function NavbarItem(props) {
	if (props.children) {
		return (
			<NavbarItemCollapsible
				id={props.id}
				icon={props.icon}
				label={props.label}
				path={props.path}
				children={props.children}
				bIsActive={props.bIsActive}
				toggleActive={props.toggleActive}
			/>
		)
	}

	return (
		<NavbarItemSimple
			id={props.id}
			icon={props.icon}
			label={props.label}
			path={props.path}
			bIsActive={props.bIsActive}
			toggleActive={props.toggleActive}
		/>
	)
}

class Navbar extends Component {
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
				{this.props.routerConfigs.map((routerConfig, index) => (
					<NavbarItem
						key={'nav-item-' + index}
						id={index}
						label={routerConfig.label}
						icon={routerConfig.icon}
						path={routerConfig.path}
						children={routerConfig.children}
						toggleActive={this.toggleActive}
						bIsActive={this.state.activeIndex === index}
					/>
				))}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		routerConfigs: state.router
	}
}

const connected = connect(mapStateToProps)(Navbar);

export { connected as Navbar };
