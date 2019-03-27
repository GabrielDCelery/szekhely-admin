import React from 'react';

import './NavbarItem.scss';

import { NavbarItemCollapsible } from './NavbarItemCollapsible';
import { NavbarItemSimple } from './NavbarItemSimple';

export function NavbarItem(props) {
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
