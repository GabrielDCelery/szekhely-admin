import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthorizedComponent } from 'components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavbarItem.scss';

export class NavbarItem extends Component {
  render() {
    const {
      bIsActive,
      children/*,
      activeUrl*/
    } = this.props;

    const NavbarItemChildren = bIsActive && children ?
    children.map((child, index) => (
      <AuthorizedComponent
        key={index}
        rbacRule={child.rbacRule}
        AuthorizedComponent={
          <Link to={child.path} className="nav-child-item">
            {this.context.t(child.label)}
          </Link>
        }
        UnAuthorizedComponent={null}
      />
    ))
    : null;

    const NavbarItemParent = children ?
      <div
        className={bIsActive ? 'd-block w-100 nav-link active' : 'w-100 nav-link'}
        onClick={() => {
          this.props.toggleActive(this.props.id);
        }}
      >
        <FontAwesomeIcon className="fas fa-2x d-block mx-auto pt-1" icon={this.props.icon} />
        <span className="d-block p-1">{this.context.t(this.props.label)}</span>
      </div>
      :
      <Link
        to={this.props.path}
        className={this.props.bIsActive ? 'd-block w-100 nav-link active' : 'w-100 nav-link'}
        onClick={() => {
          this.props.toggleActive(this.props.id)
        }}
      >
        <FontAwesomeIcon className="fas fa-2x d-block mx-auto pt-1" icon={this.props.icon} />
        <span className="d-block p-1">{this.context.t(this.props.label)}</span>
      </Link>

    return (
      <React.Fragment>
        <li className="NavbarItem nav-item">
          {NavbarItemParent}
          {NavbarItemChildren}
        </li>
      </React.Fragment>
    )
  }
}

NavbarItem.contextTypes = {
  t: PropTypes.func.isRequired
};