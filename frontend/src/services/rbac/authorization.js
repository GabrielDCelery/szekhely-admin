class Authorization {
  isAuthorized(_userAuthorizedRules = [], _rule = null) {
    return _userAuthorizedRules.includes(_rule);
  }
}

export default new Authorization();