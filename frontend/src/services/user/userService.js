import axios from 'axios';

class UserService {
  setStoredLoginCredentials(user = {}) {
    return localStorage.setItem('user', JSON.stringify(user))
  }

  getCachedUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  createAuthHeader() {
    const { token } = this.getCachedUser() || {};

    if (token) {
      return { 'Authorization': `Bearer ${token}` };
    }

    return {};
  }

  async login(email, password) {
    const { data } = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_API_URL}/authentication/login`,
      responseType: 'json',
      data: { email, password }
    });

    return data;
  }

  logout() {
    return localStorage.removeItem('user');
  }
}

export const userService = new UserService();