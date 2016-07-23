import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './components/app'
import {Home} from './components/pages/home'
import {Students} from './components/pages/students'

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory  } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/" component={App} >
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home} />
      <Route path="/students"  component={Students} />
    </Route>
  </Router>

  , document.getElementById('root'));
