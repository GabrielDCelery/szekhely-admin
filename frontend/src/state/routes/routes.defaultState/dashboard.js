import {
  STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT
} from 'services';

export default {
  path: '/dashboard',
  component: 'Dashboard',
  icon: 'tachometer-alt',
  label: 'Dashboard',
  rbacRule: STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT
}