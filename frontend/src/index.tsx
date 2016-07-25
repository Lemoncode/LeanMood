import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './components/app'
import {Home} from './components/pages/home'


import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory  } from 'react-router'


// If it needs async loading it will just call require.ensure (webpack)
const component = (component : any) : any => {
  // TODO:Removed ... and {} in return check why this is needed
  // https://medium.com/@Nadav.Dav/implementing-lazy-loading-with-webpack-and-react-router-f8497f895892#.mq4ug0c15
  const isReactComponent = (obj) => Boolean(obj && obj.prototype && Boolean(obj.prototype.isReactComponent));

  if(isReactComponent(component)) {
    return component;
  } else {
    return {
      getComponent: (location, cb) => {
        (require as any).ensure([], require => {
              // Retrieve product page component
              cb(null, require('./components/pages/students').default);
        });
      }
    }
  }
};

// The ...component, spread operator: like object assign just add the new
// properties to the Route control (and preserves the existing ones)
ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/" component={App} >
      <IndexRoute component={component(Home)}/>
      <Route path="/home" component={component(Home)} />
      <Route path="/students" {...component('./components/pages/students')}/>
    </Route>
  </Router>

  , document.getElementById('root'));
