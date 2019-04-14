import _ from 'lodash';
import { createSelector } from 'reselect';

const getRoutes = _state => {
  return _.get(_state, ['routes']);
}

const getLanguageLabels = _state => {
  const _labels = _.get(_state, ['labels']) || {};
  const _userLanguage = _.get(_state, ['user', 'settings', 'language']) || null;

  return _labels[_userLanguage] || {};
}

const replaceLabel = function replaceLabel(_label, _languageLabels) {
  return _.capitalize(_languageLabels[_.lowerCase(_label)] || _label);
}

const replaceRouteLabelsWithLanguageLabels = function replaceRouteLabelsWithLanguageLabels(_route, _languageLabels) {
  _route['label'] = replaceLabel(_route['label'], _languageLabels);

  if (_route['children']) {
    return _route['children'].forEach(_childRoute => {
      return replaceRouteLabelsWithLanguageLabels(_childRoute, _languageLabels);
    });
  }
}

export const navbarItemConfigs = createSelector(
  [getRoutes, getLanguageLabels], (_routes, _languageLabels) => {
    const _clonedRoutes = JSON.parse(JSON.stringify(_routes));

    _clonedRoutes.forEach(_clonedRoute => {
      replaceRouteLabelsWithLanguageLabels(_clonedRoute, _languageLabels);
    });

    return _clonedRoutes;
  }
)