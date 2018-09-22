import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './reducers';

const middleware = [ createLogger() ];
export default createStore(
  reducer,
  applyMiddleware(...middleware)
);