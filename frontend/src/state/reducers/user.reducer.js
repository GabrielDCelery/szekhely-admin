import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHANGE_USER_SETTINGS
} from '../constants';

const initialState = {
  email: null,
  isLoggingIn: false,
  isLoggedIn: false,
  hasLoginFailed: false,
  rules: [],
  settings: {
    language: 'EN'
  },
  jwt: null
};

export default function user(state = initialState, { type, payload }) {
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
      return {
        ...{ initialState }
      }

    case CHANGE_USER_SETTINGS:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}