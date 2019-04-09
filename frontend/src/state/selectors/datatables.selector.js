import _ from 'lodash';
import { createSelector } from 'reselect';

const getUserLanguageSetting = _state => {
  return _.get(_state, ['user', 'settings', 'language']);
};

const getQuickSearchColumnConfigs = _state => {
    return _.get(_state, ['dataTablesQuickSearch', 'columnConfigs']);
}

const getLabels = _state => {
  return _.get(_state, ['labels']);
}

export const quickSearchColumnConfigs = createSelector(
  [getQuickSearchColumnConfigs, getLabels, getUserLanguageSetting], (_quickSearchColumnConfigs, _labels, _userLanguageSetting) => {
    return _quickSearchColumnConfigs.map(_columnConfig => {
      const _columnConfigClone = _.cloneDeep(_columnConfig);

      _columnConfigClone['label'] = _.capitalize(_.get(_labels, [_userLanguageSetting, _columnConfigClone['field']]) || _.get(_labels, ['DEFAULT', _columnConfigClone['field']]))

      return _columnConfigClone;
    });
  }
)