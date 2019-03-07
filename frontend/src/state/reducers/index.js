import { combineReducers } from 'redux';

import router from './router.reducer';
import authentication from './authentication.reducer';

const combinedReducers = combineReducers({
  router: router,
  authentication: authentication
});

export default combinedReducers;