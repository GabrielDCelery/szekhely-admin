import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHANGE_USER_SETTINGS
} from './user.constants';

const initialState = {
  email: null,
  isLoggingIn: false,
  isLoggedIn: false,
  hasLoginFailed: false,
  rules: [],
  settings: {
    language: 'en'
  },
  jwt: null
};

export function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        ...{ isLoggingIn: true, hasLoginFailed: false }
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        ...{ isLoggingIn: false, isLoggedIn: true, hasLoginFailed: false }
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        ...{ isLoggingIn: false, hasLoginFailed: true }
      };

    case LOGOUT:
      return JSON.parse(JSON.stringify(initialState));

    case CHANGE_USER_SETTINGS:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}