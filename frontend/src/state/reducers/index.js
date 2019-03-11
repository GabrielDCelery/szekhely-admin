import { combineReducers } from 'redux';

import authentication from './authentication.reducer';

const combinedReducers = combineReducers({
  authentication: authentication
});

export default combinedReducers;