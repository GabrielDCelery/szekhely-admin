import { userService } from 'services';

const cachedUser = userService.getCachedUser();

export const userDefaultState = cachedUser ? {
  ...cachedUser,
  ...{
    isLoggingIn: false,
    isLoggedIn: true,
    hasLoginFailed: false,
    settings: {
      language: 'en'
    }
  }
} : {
    email: null,
    isLoggingIn: false,
    isLoggedIn: false,
    rules: [],
    jwt: null,
    settings: {
      language: 'en'
    }
  };