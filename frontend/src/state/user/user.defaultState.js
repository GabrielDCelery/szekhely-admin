import { authentication } from 'services';

const cachedUser = authentication.getStoredLoginCredentials();

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