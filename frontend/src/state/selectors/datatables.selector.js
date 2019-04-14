import _ from 'lodash';
import { createSelector } from 'reselect';

const getQuickSearchLabels = _state => {
  return _.get(_state, ['dataTablesQuickSearch', 'labels']);
}

const getQuickSearchColumnConfigs = _state => {
  return _.get(_state, ['dataTablesQuickSearch', 'columnConfigs']);
}

const getLanguageLabels = _state => {
  const _labels = _.get(_state, ['labels']) || {};
  const _userLanguage = _.get(_state, ['user', 'settings', 'language']) || null;

  return _labels[_userLanguage] || {};
}

const replaceLabel = function replaceLabel(_label, _languageLabels) {
  return _.capitalize(_languageLabels[_.lowerCase(_label)] || _label);
}

export const quickSearchLabels = createSelector(
  [getQuickSearchLabels, getLanguageLabels], (_quickSearchLabels, _languageLabels) => {
    const _newLabels = {};

    _.forEach(_quickSearchLabels, (_label, _key) => {
      _newLabels[_key] = replaceLabel(_label, _languageLabels);
    });
    
    return _newLabels;
  }
)

export const quickSearchColumnConfigs = createSelector(
  [getQuickSearchColumnConfigs, getLanguageLabels], (_quickSearchColumnConfigs, _languageLabels) => {
    return _quickSearchColumnConfigs.map(_columnConfig => {
      const _columnConfigClone = _.cloneDeep(_columnConfig);

      _columnConfigClone['label'] = replaceLabel(_columnConfigClone['label'], _languageLabels);

      return _columnConfigClone;
    });
  }
)