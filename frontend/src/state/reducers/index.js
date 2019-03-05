import { combineReducers } from 'redux';

import { router } from './router.reducer';

const combinedReducers = combineReducers({
  router: router
});

export default combinedReducers;