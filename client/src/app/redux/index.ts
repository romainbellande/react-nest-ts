import {
  push,
  routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';

export const configureStore = (middleware: Middleware) => {
  const store = createStore(
    combineReducers({
      router: routerReducer,
    }),
    applyMiddleware(middleware),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../App', () => {
      const nextRootReducer = require('../App');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
