import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import { App } from './app';
import { GeneralRoutes, NotFoundPage } from './pages/general'
import { AdminRoutes } from './pages/admin';
import { StudentsRoutes } from './pages/students';
import { TrainingsPage } from './pages/students/trainings'


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


/*
<IndexRoute component={Login}/>
<Route path="/home" component={Login} />
<Route path="/trainers" {...componentTrainers}/>

*/

/*
<Route path="*" component={NoMatchPage} />
*/
export const AppRoutes = (
    <Route  path="/" component={App} >

      {GeneralRoutes}
      {AdminRoutes}
      {StudentsRoutes}

      <Route path="*" component={NotFoundPage} />
    </Route>
)
