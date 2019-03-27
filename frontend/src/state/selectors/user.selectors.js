import _ from 'lodash';
import { createSelector } from 'reselect';
import { authorization as authorizationService } from 'services';

const isUserLoggingInState = _state => {
  return _.get(_state, ['user', 'isLoggingIn'], false);
}

const hasUserLoginFailedState = _state => {
  return _.get(_state, ['user', 'hasLoginFailed'], false);
}

const isUserLoggedInState = _state => {
  return _.get(_state, ['user', 'isLoggedIn'], false);
}

const isUserAuthorizedState = (_state, _props) => {
  return _.isNil(_props['rbacRule']) || authorizationService.isAuthorized(_.get(_state, ['user', 'rules'], []), _props['rbacRule']);
}

export const isUserLoggingIn = createSelector(
  [isUserLoggingInState], _isUserLoggingInState => {
    return _isUserLoggingInState;
  }
)

export const hasUserLoginFailed = createSelector(
  [hasUserLoginFailedState], _hasUserLoginFailedState => {
    return _hasUserLoginFailedState;
  }
)

export const isUserLoggedIn = createSelector(
  [isUserLoggedInState], _isUserLoggedInState => {
    return _isUserLoggedInState;
  }
)

export const isUserAuthorized = createSelector(
  [isUserAuthorizedState], _isUserAuthorizedState => {
    return _isUserAuthorizedState;
  }
)