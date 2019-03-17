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

  setNavbarOrder(_navbarOrder) {
    this.navbarOrder = _navbarOrder || DEFAULT_NAVBAR_ORDER;

    return this;
  }

  createRoutesConfig(_routerMap = routerMap) {
    return this._flattenDeep(
      this.navbarOrder.map(_elem => {
        return {
          path: _routerMap[_elem]['path'],
          component: _routerMap[_elem]['component']
        }
      })
    ).filter(_route => {
      return !_.isNil(_route['path']) && !_.isNil(_route['component'])
    });
  }

  createNavBarConfig(_routerMap = routerMap) {
    return this.navbarOrder.map(_elem => _routerMap[_elem]);
  }
}

export default new Router();