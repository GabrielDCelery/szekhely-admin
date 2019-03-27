import { combineReducers } from 'redux';

import user from './user.reducer';
import labels from './labels.reducer';
import routes from './routes.reducer';

const combinedReducers = combineReducers({
  user: user,
  labels: labels,
  routes: routes
});

export default combinedReducers;