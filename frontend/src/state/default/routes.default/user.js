export default {
  path: null,
  component: null,
  icon: 'user-circle',
  labelName: 'user',
  rbacRule: null,
  children: [{
    labelName: 'settings',
    path: '/user/settings',
    component: 'Settings',
    rbacRule: null
  }, {
    labelName: 'logout',
    path: '/logout',
    rbacRule: null
  }]
}