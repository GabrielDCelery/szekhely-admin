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
  component: 'Client',
  icon: 'building',
  label: 'Client',
  children: [{
    label: 'Add new',
    path: '/client/addew',
    component: 'AddNew',
    rbacRule: STATIC_RBAC_RULE_CONTRACTS_ACTION_ADD_NEW
  }, {
    label: 'Contract details',
    path: '/client/clientdetails',
    component: 'ClientDetails',
    rbacRule: null
  }]
}