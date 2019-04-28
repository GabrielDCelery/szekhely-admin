import { combineReducers } from 'redux';
import { userReducer } from './user';
import { routesReducer } from './routes';
import { contractsReducer } from './contracts';
import { clientsReducer } from './clients';
import { i18nState } from 'redux-i18n';
import { reducer as formReducer } from 'redux-form';

const combinedReducers = combineReducers({
  user: userReducer,
  routes: routesReducer,
  contracts: contractsReducer,
  clients: clientsReducer,
  i18nState: i18nState,
  form: formReducer
});

export default combinedReducers;