import _ from 'lodash';
import { createSelector } from 'reselect';

const getHasUserLoginFailed = state => _.get(state, ['user', 'hasLoginFailed'], false);
const getIsUserLoggingIn = state => _.get(state, ['user', 'isLoggingIn'], false);
const getIsUserLoggedIn = state => _.get(state, ['user', 'isLoggedIn'], false);
const getUserRules = state => {
  return _.get(state, ['user', 'rules'], []);
}
const getRbacRule = (state, props = {}) => {
  return props.rbacRule;
}
const getUserSettings = state => _.get(state, ['user', 'settings'], {});

export const hasUserLoginFailedSelector = createSelector([getHasUserLoginFailed], hasUserLoginFailed => hasUserLoginFailed);
export const isUserLoggingInSelector = createSelector([getIsUserLoggingIn], isUserLoggingIn => isUserLoggingIn);
export const isUserLoggedInSelector = createSelector([getIsUserLoggedIn], isUserLoggedIn => isUserLoggedIn);
export const isUserAuthorizedSelector = createSelector([getUserRules, getRbacRule], (userRules, rbacRule) => {
  return _.isNil(rbacRule) || userRules.includes(rbacRule);
});
export const userSettingsSelector = createSelector([getUserSettings], userSettings => userSettings);