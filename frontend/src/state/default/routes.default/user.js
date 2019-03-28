export default {
  path: null,
  component: null,
  icon: 'user-circle',
  label: 'user',
  rbacRule: null,
  children: [{
    label: 'settings',
    path: '/user/settings',
    component: 'Settings',
    rbacRule: null
  }, {
    label: 'logout',
    path: '/logout',
    rbacRule: null
  }]
}