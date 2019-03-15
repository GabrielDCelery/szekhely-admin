import { authentication as authenticationService } from 'services';

const cachedUser = authenticationService.getStoredLoginCredentials();

export default cachedUser ? { ...cachedUser, ...{ isLoggingIn: false, isLoggedIn: true } } : {
  email: null,
  isLoggingIn: false,
  isLoggedIn: false,
  rules: [],
  jwt: null
};