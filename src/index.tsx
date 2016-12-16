// Temporary workaroind issue with webpack-env.d.ts
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/10578
/// <reference path="../node_modules/@types/webpack-env/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppRoutes} from './routes';
import { Provider } from 'react-redux';
import { Router,  hashHistory  } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { reducers } from './reducers'

let store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f
  )
);


// The ...component, spread operator: like object assign just add the new
// properties to the Route control (and preserves the existing ones)
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={AppRoutes}/>
  </Provider>
  , document.getElementById('root'));
