export default {
  path: null,
  component: null,
  icon: 'user-circle',
  label: 'User',
  rbacRule: null,
  children: [{
    label: 'Settings',
    path: '/user/settings',
    component: 'Settings',
    rbacRule: null
  }, {
    label: 'Logout',
    path: '/logout',
    rbacRule: null
  }]
}