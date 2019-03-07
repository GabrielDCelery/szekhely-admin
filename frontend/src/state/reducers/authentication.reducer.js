import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants';

import { authentication as authenticationService } from '../../services';

const user = authenticationService.getUser();
const initialState = user ? {
  loggedIn: true,
  user: user
} : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };

    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };

    case LOGIN_FAILURE:
      return {};

    default:
      return state
  }
}