import axios from 'axios';

class Authentication {
  isAuthenticated () {
    
  }

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

  async login(_username, _password) {
    const _config = {
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_API_URL}/authentication/login`,
      responseType: 'json',
      data: {
        username: _username,
        password: _password
      }
    };

    const _response = await axios(_config);
  }

  logout() {
    return localStorage.removeItem('user');
  }
}

export default new Authentication();