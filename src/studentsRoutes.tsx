import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {StudentsPage,TrainingPage} from './components/pages/students'
import { Route  } from 'react-router'

// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js

export const studentsRoutes = (
    <Route path='students' component={StudentsPage}>
      <Route path='training' component={TrainingPage}/>
    </Route>
)
/*
export const studentsRoutes = (
    <Route path='students/' component={StudentsPage}>
      <Route path='trainings' component={TrainingPage}>
      </Route>
    </Route>
  )
*/
