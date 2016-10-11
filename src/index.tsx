// Temporary workaroind issue with webpack-env.d.ts
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/10578
/// <reference path="../node_modules/@types/webpack-env/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './components/app'
import {Login} from './components/pages/login'
import {Admin} from './components/pages/admin'
import {TrainingPage} from './components/pages/students'


import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory  } from 'react-router'



console.log("Hello from root index");

// If it needs async loading it will just call require.ensure (webpack)
const componentStudents = () : any => {
  // https://medium.com/@Nadav.Dav/implementing-lazy-loading-with-webpack-and-react-router-f8497f895892#.mq4ug0c15
  return {
      getComponent: (location, cb) => {
        require.ensure(['./components/pages/students'], require => {
              // Retrieve product page component
              cb(null, require('./components/pages/students')["default"]);
        });
      }
   };
};

const componentTrainers = () : any => {
  // https://medium.com/@Nadav.Dav/implementing-lazy-loading-with-webpack-and-react-router-f8497f895892#.mq4ug0c15
  return {
      getComponent: (location, cb) => {
        require.ensure(['./components/pages/trainers'], require => {
              // Retrieve product page component
              cb(null, require('./components/pages/trainers')["default"]);
        });
      }
   };
};


// The ...component, spread operator: like object assign just add the new
// properties to the Route control (and preserves the existing ones)
ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/" component={App} >
      <IndexRoute component={Login}/>
      <Route path="/home" component={Login} />
      <Route path="/students/traning" component={TrainingPage}/>
      <Route path="/students" {...componentStudents()}/>
      <Route path="/trainers" {...componentTrainers()}/>
      <Route path="/admin" component={Admin}/>
    </Route>
  </Router>
  , document.getElementById('root'));
