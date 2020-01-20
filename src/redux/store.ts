/* eslint-disable no-undef */
import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const intialState = {
  input: '0',
  operator: null,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, intialState, composeEnhancers());
/* eslint-enable */

export default store;
