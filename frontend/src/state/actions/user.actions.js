import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHANGE_USER_SETTINGS
} from '../constants';
import { authentication as authenticationService } from 'services';

export function login(_email, _password, _successCallback) {
  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST, payload: null });

    const _result = await authenticationService.login(_email, _password);

    if (!_result.success) {
      return dispatch({ type: LOGIN_FAILURE, payload: null });
    }

    authenticationService.setStoredLoginCredentials(_result.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: _result.payload });

    return _successCallback();
  };
}

export function logout(_successCallback) {
  return dispatch => {
    authenticationService.logout();
    dispatch({ type: LOGOUT, payload: null });

    return _successCallback();
  }
}

export function changeUserSettings (_newSettings) {
  return async dispatch => {
    dispatch({ type: CHANGE_USER_SETTINGS, payload: { settings: _newSettings } });
  };
}