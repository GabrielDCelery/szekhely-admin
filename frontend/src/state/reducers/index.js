import { combineReducers } from 'redux';

import user from './user.reducer';
import routes from './routes.reducer';
import dataTablesQuickSearch from './dataTables/quickSearch';
import dataTablesContracts from './dataTables/contracts';
import { i18nState } from 'redux-i18n';

const combinedReducers = combineReducers({
  user: user,
  routes: routes,
  dataTablesQuickSearch: dataTablesQuickSearch,
  dataTablesContracts: dataTablesContracts,
  i18nState: i18nState
});

export default combinedReducers;