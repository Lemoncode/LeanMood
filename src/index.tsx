import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from './store';
import { Root } from './root';

const history = syncHistoryWithStore(hashHistory, store);
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./root', () => {
    render(Root);
  });
}
