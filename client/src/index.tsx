import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './styles.scss';

import { App } from './app/App';

const rootEl = document.getElementById('root');

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl,
  );
};

// First initialization
renderApp();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app/App', () => {
    const NextApp = require<{default: typeof App}>('./app/App').default;
    setImmediate(() => {
      ReactDOM.unmountComponentAtNode(rootEl);
      renderApp();
    });
   });
}
