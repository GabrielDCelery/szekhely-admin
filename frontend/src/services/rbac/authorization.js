class Authorization {
  isAuthorized(_rule) {
    const _user = JSON.parse(localStorage.getItem('user')) || {};
    const _userRoles = _user.roles || [];

    return _userRoles.includes(_rule);
  }
}

export default new Authorization();