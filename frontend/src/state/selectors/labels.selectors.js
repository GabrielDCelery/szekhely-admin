import _ from 'lodash';
import { createSelector } from 'reselect';

const getUserLanguageSetting = _state => {
  return _.get(_state, ['user', 'settings', 'language']);
};

const getLabels = _state => {
  return _.get(_state, ['labels']);
}

export const labels = createSelector(
  [getUserLanguageSetting, getLabels], (_userLanguageSetting, _labels) => {
    return _labels[_userLanguageSetting];
  }
)