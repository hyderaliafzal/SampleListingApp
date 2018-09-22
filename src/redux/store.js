import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middleware = [ thunk, promise() ];
middleware.push(createLogger());
export default createStore(
  reducer,
  compose(
    applyMiddleware(...middleware)
  )
);