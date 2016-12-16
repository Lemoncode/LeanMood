import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import { App } from './app';
import { GeneralRoutes, NotFoundPage } from './pages/general'
import { AdminRoutes } from './pages/admin';
import { TrainingRoutes } from './pages/trainer'
import { StudentsRoutes } from './pages/student';

export const AppRoutes = (
    <Route  path="/" component={App} >

      { GeneralRoutes }
      { AdminRoutes }
      { StudentsRoutes }
      { TrainingRoutes }

      <Route path="*" component={NotFoundPage} />
    </Route>
)
