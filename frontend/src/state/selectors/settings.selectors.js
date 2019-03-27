import _ from 'lodash';
import { createSelector } from 'reselect';

const getUserSettings = _state => {
  return _.get(_state, ['user', 'settings'], {});
}

export const userSettings = createSelector(
  [getUserSettings], _userSettings => {
    return _userSettings;
  }
)