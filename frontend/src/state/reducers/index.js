import { combineReducers } from 'redux';

import user from './user.reducer';
import labels from './labels.reducer';

const combinedReducers = combineReducers({
  user: user,
  labels: labels
});

export default combinedReducers;