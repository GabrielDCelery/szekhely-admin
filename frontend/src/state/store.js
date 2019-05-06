import { createStore, applyMiddleware } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import combinedReducers from './combinedReducers';
import combinedDefaultState from './combinedDefaultState';

//const loggerMiddleware = createLogger();

export const store = createStore(
  combinedReducers,
  combinedDefaultState,
  applyMiddleware(
    thunkMiddleware/*,
    loggerMiddleware*/
  )
);