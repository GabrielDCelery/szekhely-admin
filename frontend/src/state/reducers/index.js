import { combineReducers } from 'redux';

import user from './user.reducer';
import labels from './labels.reducer';
import routes from './routes.reducer';
import dataTablesQuickSearch from './dataTables/quickSearch';

const combinedReducers = combineReducers({
  user: user,
  labels: labels,
  routes: routes,
  dataTablesQuickSearch: dataTablesQuickSearch
});

export default combinedReducers;