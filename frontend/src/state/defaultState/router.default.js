export const routerDefaultState = [{
  label: 'Dasboard',
  icon: 'tachometer-alt',
  path: '/dashboard',
  page: 'Dashboard'
}, {
  label: 'Contracts',
  icon: 'file-signature',
  path: '/contracts',
  page: 'Contracts',
  children: [{
    label: 'Search',
    path: '/contracts/search'
  }, {
    label: 'Add New',
    path: '/contracts/addnew'
  }]
}, {
  label: 'Documents',
  icon: 'file-contract',
  path: '/documents',
  page: 'Contracts',
}, {
  label: 'Mailing',
  icon: 'envelope-square',
  path: '/mailing',
  page: 'Mailing',
  children: [{
    label: 'Search',
    path: '/contracts/search'
  }, {
    label: 'Add New',
    path: '/contracts/addnew'
  }]
}, {
  label: 'Invoices',
  icon: 'file-invoice-dollar',
  path: '/invoices',
  page: 'Invoices'
}, {
  label: 'Statistics',
  icon: 'chart-line',
  path: '/statistics',
  page: 'Statistics'
}, {
  label: 'Settings',
  icon: 'cog',
  path: '/settings',
  page: 'Settings'
}];