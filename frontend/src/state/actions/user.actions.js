import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants';
import { authentication as authenticationService } from 'services';

export function login(_email, _password, _successCallback) {
  return async dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: null
    });

    const _result = await authenticationService.login(_email, _password);

    if (_result.success === true) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: _result.payload
      });

      return _successCallback();
    }

    return dispatch({
      type: LOGIN_FAILURE,
      payload: null
    });
  };
}