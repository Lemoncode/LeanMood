import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { AppRoutes } from './routes';
import { reducers } from './reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    /* tslint:disable-next-line */
    window["devToolsExtension"] && window["devToolsExtension"]()
  ),
);
const history = syncHistoryWithStore(hashHistory, store);

// The ...component, spread operator: like object assign just add the new
// properties to the Route control (and preserves the existing ones)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={AppRoutes} />
  </Provider>,
  document.getElementById('root'),
);
