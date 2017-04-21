import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { MainTocPage } from './main-toc/page';
import { TrainingListPage } from './training/list/page';
import { ExerciseDeliveryPage } from './training/exercise/page';

// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js
// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
export const StudentsRoutes = (
  <div>
    <Route path="/student" component={TrainingListPage} />
    <Route path="/student/maintoc/" component={MainTocPage} />

    {/* Mocked link */}
    <Route path="/student/training/1/exercise/1/delivery" component={ExerciseDeliveryPage} />
  </div>
);
