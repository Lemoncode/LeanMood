// Temporary workaroind issue with webpack-env.d.ts
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/10578
/// <reference path="../node_modules/@types/webpack-env/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppRoutes} from './routes';

import { Router,  hashHistory  } from 'react-router'

console.log("Hello from root index");

// The ...component, spread operator: like object assign just add the new
// properties to the Route control (and preserves the existing ones)
ReactDOM.render(
  <Router history={hashHistory} routes={AppRoutes}/>
  , document.getElementById('root'));
