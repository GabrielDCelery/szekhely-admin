import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants';

const initialState = {
  email: null,
  isLoggingIn: false,
  isLoggedIn: false,
  rules: [],
  jwt: null
};

export default function authentication(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        ...{ isLoggingIn: true }
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        ...{ isLoggingIn: false, isLoggedIn: true }
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        ...{ isLoggingIn: false }
      };

    default:
      return state
  }
}