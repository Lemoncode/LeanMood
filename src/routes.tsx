import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';

import {App} from './components/app';
import {Login} from './components/pages/login';
import {AdminRoutes} from './components/pages/admin';
import {TrainingPage, StudentsRoutes} from './components/pages/students';
import {NoMatchPage} from './components/pages/noMatch';

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