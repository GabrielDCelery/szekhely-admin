import {
  STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT,
  STATIC_RBAC_RULE_MAILS_PAGE_VISIT,
  STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT,
  STATIC_RBAC_RULE_INVOICES_PAGE_VISIT,
  STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW
} from 'state/constants';

export default {
  path: null,
  component: 'Clients',
  icon: 'building',
  label: 'clients',
  children: [{
    label: 'addNew',
    path: '/clients/addew',
    component: 'AddNew',
    rbacRule: STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW
  }, {
    label: 'contracts',
    path: '/clients/contracts',
    component: 'Contracts',
    rbacRule: STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT
  }, {
    label: 'mails',
    path: '/clients/mails',
    rbacRule: STATIC_RBAC_RULE_MAILS_PAGE_VISIT
  }, {
    label: 'inspections',
    path: '/clients/inspections',
    rbacRule: STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT
  }, {
    label: 'invoices',
    path: '/clients/invoices',
    rbacRule: STATIC_RBAC_RULE_INVOICES_PAGE_VISIT
  }]
}