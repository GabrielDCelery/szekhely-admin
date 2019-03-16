import { authentication as authenticationService } from 'services';

const cachedUser = authenticationService.getStoredLoginCredentials();

export default cachedUser ? { ...cachedUser, ...{ isLoggingIn: false, isLoggedIn: true, hasLoginFailed: false } } : {
  email: null,
  isLoggingIn: false,
  isLoggedIn: false,
  rules: [],
  jwt: null
};