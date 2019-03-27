import _ from 'lodash';
import { createSelector } from 'reselect';

const getIsUserAuthorized = (_state, _props) => {
  return _.isNil(_props['rbacRule']) || _.get(_state, ['user', 'rules'], []).includes(_props['rbacRule']);
}

export const isUserAuthorized = createSelector(
  [getIsUserAuthorized], _isUserAuthorized => {
    return _isUserAuthorized;
  }
)