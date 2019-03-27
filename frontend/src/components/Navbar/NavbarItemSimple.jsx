import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { capitalizedLabels } from 'state/selectors';

class NavbarItemSimple extends Component {
	render() {
		return (
			<li className="NavbarItem NavbarItemSimple nav-item">
				<Link
					to={this.props.path}
					className="nav-link"
					onClick={() => {
						this.props.toggleActive(this.props.id)
					}}
				>
					<FontAwesomeIcon className="fas fa-2x" icon={this.props.icon} />
					<span className="p-2">{this.props.capitalizedLabels[this.props.label]}</span>
				</Link>
				<hr />
			</li>
		);
	}
}


const mapStateToProps = state => {
	return {
		capitalizedLabels: capitalizedLabels(state)
	}
}

const connected = connect(mapStateToProps)(NavbarItemSimple);

export { connected as NavbarItemSimple };