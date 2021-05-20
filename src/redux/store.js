import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middlewares = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
