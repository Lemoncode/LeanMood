import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from './store';
import { AppProvider } from './provider';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(AppProvider);

if (module.hot) {
  module.hot.accept('./provider', () => {
    render(AppProvider);
  });
}
