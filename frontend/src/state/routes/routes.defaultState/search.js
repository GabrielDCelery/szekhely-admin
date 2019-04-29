import {
  STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT,
  STATIC_RBAC_RULE_MAILS_PAGE_VISIT,
  STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT,
  STATIC_RBAC_RULE_INVOICES_PAGE_VISIT,
  STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW/*,
  STATIC_RBAC_RULE_CLIENTS_QUICK_SEARCH_PAGE_VISIT*/
} from 'services';

export default {
  path: null,
  component: 'Search',
  icon: 'search',
  label: 'Search',
  children: [{
    label: 'Contracts',
    path: '/search/contracts',
    component: 'Contracts',
    rbacRule: STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT
  }, {
    label: 'Mails',
    path: '/search/mails',
    rbacRule: STATIC_RBAC_RULE_MAILS_PAGE_VISIT
  }, {
    label: 'Inspections',
    path: '/search/inspections',
    rbacRule: STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT
  }, {
    label: 'Invoices',
    path: '/search/invoices',
    rbacRule: STATIC_RBAC_RULE_INVOICES_PAGE_VISIT
  }]
}