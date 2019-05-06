import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHANGE_USER_SETTINGS
} from './user.constants';
import { userService } from 'services';
import { setLanguage as setLanguageI18n } from 'redux-i18n';

export function loginAction(email, password, successCallback = () => { }) {
  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST, payload: null });

    const { success, payload } = await userService.login(email, password);

    if (!success) {
      return dispatch({ type: LOGIN_FAILURE, payload: null });
    }

    const { rules, jwt } = payload;

    userService.setStoredLoginCredentials({ email, rules, jwt });
    dispatch({ type: LOGIN_SUCCESS, payload: { email, rules, jwt } });

    return successCallback();
  };
}

export function logoutAction(successCallback = () => { }) {
  return dispatch => {
    userService.logout();
    dispatch({ type: LOGOUT, payload: null });

    return successCallback();
  }
}

export function changeUserSettingsAction(settings) {
  return async dispatch => {
    const { language } = settings;
    
    dispatch(setLanguageI18n(language));
    dispatch({ type: CHANGE_USER_SETTINGS, payload: { settings } });
  };
}