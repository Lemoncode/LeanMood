import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { MainTocPage } from './main-toc/page';
import { TrainingListPage } from './training/list/page';

// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js
// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
export const StudentsRoutes = (
  <div>
    <Route path="students" component={TrainingListPage}/>
    <Route path="/students/maintoc/" component={MainTocPage}/>
  </div>
);
