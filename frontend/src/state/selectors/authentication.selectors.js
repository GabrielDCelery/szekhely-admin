import _ from 'lodash';
import { createSelector } from 'reselect';

const getHasUserLoginFailed = _state => {
  return _.get(_state, ['user', 'hasLoginFailed'], false);
}

const getIsUserLoggingIn = _state => {
  return _.get(_state, ['user', 'isLoggingIn'], false);
}

const getIsUserIsLoggedIn = _state => {
  return _.get(_state, ['user', 'isLoggedIn'], false);
}

export const hasUserLoginFailed = createSelector(
  [getHasUserLoginFailed], _hasUserLoginFailed => {
    return _hasUserLoginFailed;
  }
)

export const isUserLoggingIn = createSelector(
  [getIsUserLoggingIn], _isUserLoggingIn => {
    return _isUserLoggingIn;
  }
)

export const isUserLoggedIn = createSelector(
  [getIsUserIsLoggedIn], _isUserLoggedIn => {
    return _isUserLoggedIn;
  }
)