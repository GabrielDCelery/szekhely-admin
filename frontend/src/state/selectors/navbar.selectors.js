import _ from 'lodash';
import { createSelector } from 'reselect';

const getUserLanguageSetting = _state => {
  return _.get(_state, ['user', 'settings', 'language']);
};

const getLabels = _state => {
  return _.get(_state, ['labels']);
}

const getRoutes = _state => {
  return _.get(_state, ['routes']);
}

const replaceRouteLabelsWithLanguageLabels = function replaceRouteLabelsWithLanguageLabels(_route, _languageLabels) {
  _route['label'] = _.capitalize(_languageLabels[_route['label']]);

  if (_route['children']) {
    return _route['children'].forEach(_childRoute => {
      return replaceRouteLabelsWithLanguageLabels(_childRoute, _languageLabels);
    });
  }
}

export const navbarItemConfigs = createSelector(
  [getUserLanguageSetting, getLabels, getRoutes], (_userLanguageSetting, _labels, _routes) => {
    const _languageLabels = _labels[_userLanguageSetting];
    const _clonedRoutes = _.cloneDeep(_routes);

    _clonedRoutes.forEach(_clonedRoute => {
      replaceRouteLabelsWithLanguageLabels(_clonedRoute, _languageLabels);
    });

    return _clonedRoutes;
  }
)