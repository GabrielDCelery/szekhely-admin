import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USE_STORED_LOGIN_CREDENTIALS
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
export function useStoredLoginCredentials() {
  return dispatch => {
    const cachedUser = authenticationService.getStoredLoginCredentials();

    if (!cachedUser) {
      return;
    }

    dispatch({
      type: USE_STORED_LOGIN_CREDENTIALS,
      payload: cachedUser
    });
  };
}