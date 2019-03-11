import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USE_CACHED_LOGIN_DETAILS
} from '../constants';

const initialState = {
  user: {
    loggedIn: false,
    rules: []
  }
};

export default function authentication(state = initialState, { type, payload }) {
  switch (type) {
    case USE_CACHED_LOGIN_DETAILS:
      return {
        user: payload
      };
    case LOGIN_REQUEST:
      return {
        user: {
          loggingIn: true,
          rules: []
        }
      };

    case LOGIN_SUCCESS:
      return {
        user: {
          loggedIn: true,
          rules: payload
        }
      };

    case LOGIN_FAILURE:
      return {};

    default:
      return state
  }
}