import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants';

import { authentication as authenticationService } from 'services';

const user = authenticationService.getUser();
const initialState = user ? {
  loggedIn: true,
  user: user
} : {
  loggedIn: false,
  user: {
    rules: []
  }
};

export default function authentication(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: payload
      };

    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: payload
      };

    case LOGIN_FAILURE:
      return {};

    default:
      return state
  }
}