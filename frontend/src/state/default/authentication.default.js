import { authentication as authenticationService } from 'services';

const cachedUser = authenticationService.getStoredLoginCredentials();

export default {
  user: cachedUser ? cachedUser : {
    isLoggedIn: true,
    rules: []
  }
};
