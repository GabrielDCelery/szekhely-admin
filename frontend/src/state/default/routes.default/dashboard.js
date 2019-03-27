import {
  STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT
} from 'state/constants';

export default {
  path: '/dashboard',
  component: 'Dashboard',
  icon: 'tachometer-alt',
  labelName: 'dashboard',
  rbacRule: STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT
}