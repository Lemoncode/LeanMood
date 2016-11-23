import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TrainingsPage, MainTocPage } from '.'
import { Route } from 'react-router'


// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js
// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
export const StudentsRoutes = (
  <div>
    <Route path='students' component={TrainingsPage}/>
    <Route path='/students/maintoc/' component={MainTocPage}/>
  </div>

)
