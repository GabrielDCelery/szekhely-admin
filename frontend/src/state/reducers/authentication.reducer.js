import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants';

import { authentication as authenticationService } from 'services';

const user = authenticationService.getUser();
const initialState = user ? { user: user } : {
  user: {
    loggedIn: false,
    rules: []
  }
};

export default function authentication(state = initialState, { type, payload }) {
  switch (type) {
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