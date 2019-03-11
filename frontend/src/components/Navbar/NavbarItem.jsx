import React from 'react';

import './NavbarItem.css';

import NavbarItemCollapsible from './NavbarItemCollapsible';
import NavbarItemSimple from './NavbarItemSimple';

export function NavbarItem(props) {
  if (props.children) {
    return (
      <NavbarItemCollapsible
        rbacRule={props.rbacRule}
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
      rbacRule={props.rbacRule}
      id={props.id}
      icon={props.icon}
      label={props.label}
      path={props.path}
      bIsActive={props.bIsActive}
      toggleActive={props.toggleActive}
    />
  )
}
