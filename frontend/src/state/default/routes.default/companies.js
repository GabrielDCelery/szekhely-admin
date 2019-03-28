import {
  STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT,
  STATIC_RBAC_RULE_MAILS_PAGE_VISIT,
  STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT,
  STATIC_RBAC_RULE_INVOICES_PAGE_VISIT,
  STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW
} from 'state/constants';

export default {
  path: null,
  component: 'Companies',
  icon: 'building',
  label: 'companies',
  children: [{
    label: 'addNew',
    path: '/companies/addew',
    component: 'AddNew',
    rbacRule: STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW
  }, {
    label: 'contracts',
    path: '/companies/contracts',
    rbacRule: STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT
  }, {
    label: 'mails',
    path: '/companies/mails',
    rbacRule: STATIC_RBAC_RULE_MAILS_PAGE_VISIT
  }, {
    label: 'inspections',
    path: '/companies/inspections',
    rbacRule: STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT
  }, {
    label: 'invoices',
    path: '/companies/invoices',
    rbacRule: STATIC_RBAC_RULE_INVOICES_PAGE_VISIT
  }]
}