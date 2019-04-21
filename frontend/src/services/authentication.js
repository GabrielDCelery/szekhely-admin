import axios from 'axios';

class Authentication {
  setStoredLoginCredentials(_user = {}) {
    return localStorage.setItem('user', JSON.stringify(_user))
  }

  getStoredLoginCredentials() {
    return JSON.parse(localStorage.getItem('user'));
  }

  createAuthHeader() {
    const user = this.getStoredLoginCredentials();

    if (user && user.token) {
      return { 'Authorization': `Bearer ${user.token}` };
    }

    return {};
  }

  async login(_email, _password) {
    const { data } = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_API_URL}/authentication/login`,
      responseType: 'json',
      data: {
        email: _email,
        password: _password
      }
    });

    return data;
  }

  logout() {
    return localStorage.removeItem('user');
  }
}

export default new Authentication();