import _ from 'lodash';
import routerMap from './routerMap';

const DEFAULT_NAVBAR_ORDER = [
  'user',
  'dashboard',
  'companies'
];

class Router {
  constructor() {
    this.setNavbarOrder();
  }

  _flattenDeep(_array) {
    return _array.reduce((_acc, _val) => Array.isArray(_val) ? _acc.concat(this.flattenDeep(_val)) : _acc.concat(_val), []);
  }

  _normalizeAndFlattenRoutes (_routes, _final) {
    return _routes.forEach(_route => {
      _final.push({
        path: _route['path'],
        component: _route['component']
      });

      if (_route['children']) {
        return this._normalizeAndFlattenRoutes(_route['children'], _final);
      }
    });
  }

  setNavbarOrder(_navbarOrder) {
    this.navbarOrder = _navbarOrder || DEFAULT_NAVBAR_ORDER;

    return this;
  }

  createRoutesConfig(_routerMap = routerMap) {
    const _final = [];
    const _routes = this.navbarOrder.map(_elem => _routerMap[_elem]);
    
    this._normalizeAndFlattenRoutes(_routes, _final);

    return _final.filter(_route => {
      return !_.isNil(_route['path']) && !_.isNil(_route['component'])
    });
  }

  createNavBarConfig(_routerMap = routerMap) {
    return this.navbarOrder.map(_elem => _routerMap[_elem]);
  }
}

export default new Router();