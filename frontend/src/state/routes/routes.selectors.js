import _ from 'lodash';
import { createSelector } from 'reselect';

const getRoutes = state => _.get(state, ['routes']);

const normalizeAndFlattenRoutes = (routes, final) => {
  return routes.forEach(route => {
    const { path, component, children } = route;

    final.push({ path, component });

    if (children) {
      return normalizeAndFlattenRoutes(children, final);
    }
  });
}

export const routesConfigSelector = createSelector(
  [getRoutes], routes => {
    const final = [];

    normalizeAndFlattenRoutes(routes, final);

    return final.filter(route => {
      const { path, component } = route;

      return !_.isNil(path) && !_.isNil(component);
    });
  }
)