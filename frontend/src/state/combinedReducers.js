import { combineReducers } from 'redux';
import { userReducer } from './user';
import { routesReducer } from './routes';
import { contractsReducer } from './contracts';
import { clientsReducer } from './clients';
import { dataTablesConfigsReducer } from './dataTableConfigs';
import { i18nState } from 'redux-i18n';

const combinedReducers = combineReducers({
  user: userReducer,
  routes: routesReducer,
  contracts: contractsReducer,
  clients: clientsReducer,
  dataTablesConfigs: dataTablesConfigsReducer,
  i18nState: i18nState
});

export default combinedReducers;