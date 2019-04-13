import _ from 'lodash';
import { createSelector } from 'reselect';

const getIsUserAuthorized = (_state, _props) => {
  const { rbacRule } = _props;
  return _.isNil(rbacRule) || _.get(_state, ['user', 'rules'], []).includes(rbacRule);
}

export const isUserAuthorized = createSelector(
  [getIsUserAuthorized], _isUserAuthorized => {
    return _isUserAuthorized;
  }
)