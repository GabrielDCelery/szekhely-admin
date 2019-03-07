class Authentication {
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  createAuthHeader() {
    const _user = this.getUser();

    if (_user && _user.token) {
      return { 'Authorization': `Bearer ${_user.token}` };
    }

    return {};
  }

  login(_username, _password) {

  }

  logout() {
    return localStorage.removeItem('user');
  }
}

export const authentication = new Authentication();