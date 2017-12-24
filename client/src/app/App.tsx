import * as React from 'react';

import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import {
  ConnectedRouter,
  routerMiddleware } from 'react-router-redux';
import { Store } from 'redux';

import './App.scss';
import { Home } from './pages';
import { configureStore } from './redux';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={configureStore(middleware)}>
        <ConnectedRouter history={history}>
          <Route exact={true} path="/" component={Home} />
        </ConnectedRouter>
      </Provider>
    );
  }
}
