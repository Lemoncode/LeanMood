import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import {App} from './app';
import {Login} from './pages/login';
import {AdminRoutes} from './pages/admin';
import {StudentsRoutes} from './pages/students';
import {NoMatchPage} from './pages/noMatch';

import {MainTocPage} from './pages/students/main-toc'
import {TrainingsPage} from './pages/students/trainings'

const componentTrainers = () : any => {
  // https://medium.com/@Nadav.Dav/implementing-lazy-loading-with-webpack-and-react-router-f8497f895892#.mq4ug0c15
  return {
      getComponent: (location, cb) => {
        require.ensure(['./pages/trainers'], require => {
              // Retrieve product page component
              cb(null, require('./pages/trainers')["default"]);
        });
      }
   };
};


// {StudentsRoutes}
/*
<Route path='students' component={TrainingsPage}/>
<Route path='/students/maintoc/' component={MainTocPage}/>
*/

export const AppRoutes = (
    <Route  path="/" component={App} >
      <IndexRoute component={Login}/>
      <Route path="/home" component={Login} />
      <Route path="/trainers" {...componentTrainers}/>
      {AdminRoutes}
      {StudentsRoutes}

      <Route path="*" component={NoMatchPage} />
    </Route>
)
