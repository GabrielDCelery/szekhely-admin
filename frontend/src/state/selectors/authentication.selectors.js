import _ from 'lodash';
import { createSelector } from 'reselect';

const getUserIsLoggingInStatus = _state => {
  return _.get(_state, ['user', 'isLoggingIn'], false);
}

const getUserHasLoginFailedStatus = _state => {
  return _.get(_state, ['user', 'hasLoginFailed'], false);
}

const getUserIsLoggedInStatus = _state => {
  return _.get(_state, ['user', 'isLoggedIn'], false);
}

export const hasUserLoginFailed = createSelector(
  [getUserHasLoginFailedStatus], _hasUserLoginFailed => {
    return _hasUserLoginFailed;
  }
)

export const isUserLoggingIn = createSelector(
  [getUserIsLoggingInStatus], _isUserLoggingIn => {
    return _isUserLoggingIn;
  }
)

export const isUserLoggedIn = createSelector(
  [getUserIsLoggedInStatus], _isUserLoggedIn => {
    return _isUserLoggedIn;
  }
)