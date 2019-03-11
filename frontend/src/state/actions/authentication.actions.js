import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USE_CACHED_LOGIN_DETAILS
} from '../constants';
import { authentication as authenticationService } from 'services';
/*
export async function login(_username, _password) {
  return async dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: _username
    });

    const _result = await authenticationService.login(_username, _password);

    if (_result.success === true) {
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: _result.payload
      });
    }

    return dispatch({
      type: LOGIN_FAILURE,
      payload: null
    });
  };
}
*/
export function useStoredLoginDetails() {
  return dispatch => {
    const cachedUser = authenticationService.getStoredLoginDetails();

    if (!cachedUser) {
      return;
    }

    dispatch({
      type: USE_CACHED_LOGIN_DETAILS,
      payload: cachedUser
    });
  };
}