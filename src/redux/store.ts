import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { DEV } from '../constants/env';
import { IRootState } from './IStore';
import { reducer } from './reducers';

let store

export const getStore = (state, isServer?): Store<IRootState> => {
  if (isServer && typeof window === 'undefined') {
    return createStore<IRootState, any, {}, undefined>(reducer, state, applyMiddleware(thunk))
  } else {
    const composeEnhancers = DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    if (!store) {
      const mw = [thunk]
      if (!DEV) {
        if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
          // tslint:disable-next-line:no-empty
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () { }
        }
      } else {
        mw.push(createLogger({
          predicate: (getState, action) => !/^@@/.test(action.type),
          collapsed: true
        }))
      }

      store = createStore<IRootState, any, {}, undefined>(
        reducer,
        state,
        composeEnhancers(applyMiddleware(...mw))
      )
    }
    return store
  }
}
