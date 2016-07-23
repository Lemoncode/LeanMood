import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {App} from './components/app'
import {Home} from './components/pages/home'
import {Students} from './components/pages/students'

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory  } from 'react-router'

// https://medium.com/@Nadav.Dav/implementing-lazy-loading-with-webpack-and-react-router-f8497f895892#.mq4ug0c15
const isReactComponent = (obj) => Boolean(obj && obj.prototype && Boolean(obj.prototype.isReactComponent));

const component = (component : any) : any => {
  return isReactComponent(component)
    ? {component}
    : {getComponent: (loc, cb)=> component(
         comp=> cb(null, comp.default || comp))}
};

ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/" component={App} >
      <IndexRoute component={...component(Home)}/>
      <Route path="/" component={...component(Home)} />
      <Route path="/students"  component={...component(Students)} />
    </Route>
  </Router>

  , document.getElementById('root'));
