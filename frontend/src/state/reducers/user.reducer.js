import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../constants';

const initialState = {
  email: null,
  isLoggingIn: false,
  isLoggedIn: false,
  hasLoginFailed: false,
  rules: [],
  jwt: null
};

export default function authentication(state = initialState, { type, payload }) {
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

    default:
      return state
  }
}