import _ from 'lodash';
import { createSelector } from 'reselect';

const getRoutes = _state => {
  return _.get(_state, ['routes']);
}

const normalizeAndFlattenRoutes = (_routes, _final) => {
  return _routes.forEach(_route => {
    _final.push({
      path: _route['path'],
      component: _route['component']
    });

    if (_route['children']) {
      return normalizeAndFlattenRoutes(_route['children'], _final);
    }
  });
}

export const routerConfig = createSelector(
  [getRoutes], (_routes) => {
    const _final = [];

    normalizeAndFlattenRoutes(_routes, _final);
  
    return _final.filter(_route => {
      return !_.isNil(_route['path']) && !_.isNil(_route['component'])
    });
  }
)