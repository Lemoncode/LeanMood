import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TrainingsPage, MainTocPage } from '.'
import { Route } from 'react-router'


// // If it needs async loading it will just call require.ensure (webpack)
// const componentStudents = () : any => {
//   // https://medium.com/@Nadav.Dav/implementing-lazy-loading-with-webpack-and-react-router-f8497f895892#.mq4ug0c15
//   return {
//       getComponent: (location, cb) => {
//         require.ensure(['./components/pages/students'], require => {
//               // Retrieve product page component
//               cb(null, require('./components/pages/students')["default"]);
//         });
//       }
//    };
// };

// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js
// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
export const StudentsRoutes = (
    <Route path='students' component={TrainingsPage}>
      <Route path='/students/maintoc/' component={MainTocPage}/>
    </Route>

)
