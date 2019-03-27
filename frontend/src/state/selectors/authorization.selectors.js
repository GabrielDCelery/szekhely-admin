import _ from 'lodash';
import { createSelector } from 'reselect';
import { authorization as authorizationService } from 'services';

const isUserAuthorizedMethod = (_state, _props) => {
  return _.isNil(_props['rbacRule']) || authorizationService.isAuthorized(_.get(_state, ['user', 'rules'], []), _props['rbacRule']);
}

export const isUserAuthorized = createSelector(
  [isUserAuthorizedMethod], _isUserAuthorizedState => {
    return _isUserAuthorizedState;
  }
)