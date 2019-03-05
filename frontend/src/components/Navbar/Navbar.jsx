import React from 'react';
import './Navbar.css';
import NavbarItem from './NavbarItem';
import { connect } from 'react-redux';

class Navbar extends React.Component {
	render() {
		const renderedNavbarItems = this.props.routerConfigs.map((routerConfig, index) => (
			<NavbarItem key={'nav-item-' + index} label={routerConfig.label} icon={routerConfig.icon} path={routerConfig.path} />
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

function mapStateToProps(state) {
  return {
    routerConfigs: state.router
  }
}

const connected = connect(mapStateToProps)(Navbar);

export { connected as Navbar };
