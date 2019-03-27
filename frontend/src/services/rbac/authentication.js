import axios from 'axios';

class Authentication {
  setStoredLoginCredentials(_user = {}) {
    return localStorage.setItem('user', JSON.stringify(_user))
  }

  getStoredLoginCredentials() {
    return JSON.parse(localStorage.getItem('user')) || {};
  }

  createAuthHeader() {
    const _user = this.getStoredLoginCredentials();

    if (_user && _user.token) {
      return { 'Authorization': `Bearer ${_user.token}` };
    }

    return {};
  }

  async login(_email, _password) {
    const _config = {
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_API_URL}/authentication/login`,
      responseType: 'json',
      data: {
        email: _email,
        password: _password
      }
    };
    const _result = await axios(_config);

    return _result['data'];
  }

  logout() {
    return localStorage.removeItem('user');
  }
}

export default new Authentication();