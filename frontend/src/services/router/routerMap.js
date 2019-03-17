import {
  STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT,
  STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT,
  STATIC_RBAC_RULE_MAILS_PAGE_VISIT,
  STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT,
  STATIC_RBAC_RULE_INVOICES_PAGE_VISIT,
  STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW
} from 'services';

export default {
  user: {
    path: null,
    component: null,
    icon: 'user-circle',
    label: 'User',
    rbacRule: null,
    children: [{
      label: 'Settings',
      path: '/user/settings',
      rbacRule: null
    }, {
      label: 'Logout',
      path: '/logout',
      rbacRule: null
    }]
  },
  dashboard: {
    path: '/dashboard',
    component: 'Dashboard',
    icon: 'tachometer-alt',
    label: 'Dasboard',
    rbacRule: STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT
  },
  companies: {
    label: 'Companies',
    icon: 'building',
    path: '/companies',
    component: 'Companies',
    children: [{
      label: 'Add New',
      path: '/companies/addew',
      rbacRule: STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW
    }, {
      label: 'Contracts',
      path: '/companies/contracts',
      rbacRule: STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT
    }, {
      label: 'Mails',
      path: '/companies/mails',
      rbacRule: STATIC_RBAC_RULE_MAILS_PAGE_VISIT
    }, {
      label: 'Inspections',
      path: '/companies/inspections',
      rbacRule: STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT
    }, {
      label: 'Invoices',
      path: '/companies/invoices',
      rbacRule: STATIC_RBAC_RULE_INVOICES_PAGE_VISIT
    }]
  }
}