import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Root-reducer
import { rootReducer } from './root-reducer'

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer , undefined , middleWares);