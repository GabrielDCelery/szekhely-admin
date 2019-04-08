import { combineReducers } from 'redux';

import user from './user.reducer';
import labels from './labels.reducer';
import routes from './routes.reducer';
import clients from './clients.reducer';

const combinedReducers = combineReducers({
  user: user,
  labels: labels,
  routes: routes,
  clients: clients
});

export default combinedReducers;