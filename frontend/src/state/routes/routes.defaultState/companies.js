import {
  STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT,
  STATIC_RBAC_RULE_MAILS_PAGE_VISIT,
  STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT,
  STATIC_RBAC_RULE_INVOICES_PAGE_VISIT,
  STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW,
  STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT
} from 'services';

export default {
  path: null,
  component: 'Clients',
  icon: 'building',
  label: 'Clients',
  children: [{
    label: 'Add new',
    path: '/clients/addew',
    component: 'AddNew',
    rbacRule: STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW
  }, /*{
    label: 'Quick search',
    path: '/clients/quicksearch',
    component: 'QuickSearch',
    rbacRule: STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT
  }, */{
    label: 'Contracts',
    path: '/clients/contracts',
    component: 'Contracts',
    rbacRule: STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT
  }, {
    label: 'Mails',
    path: '/clients/mails',
    rbacRule: STATIC_RBAC_RULE_MAILS_PAGE_VISIT
  }, {
    label: 'Inspections',
    path: '/clients/inspections',
    rbacRule: STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT
  }, {
    label: 'Invoices',
    path: '/clients/invoices',
    rbacRule: STATIC_RBAC_RULE_INVOICES_PAGE_VISIT
  }]
}