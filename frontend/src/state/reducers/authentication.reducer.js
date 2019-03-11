import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USE_STORED_LOGIN_CREDENTIALS
} from '../constants';

const initialState = {
  user: {
    loggedIn: false,
    rules: []
  }
};

export default function authentication(state = initialState, { type, payload }) {
  switch (type) {
    case USE_STORED_LOGIN_CREDENTIALS:
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