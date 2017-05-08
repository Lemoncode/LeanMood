import * as React from 'react';
import { Route } from 'react-router';

import { AppContainer } from './appContainer';
import { AdminRoutes } from './pages/admin';
import { GeneralRoutes, NotFoundPage } from './pages/general';
import { StudentsRoutes } from './pages/student';
import { TrainingRoutes } from './pages/trainer';

export const routes = (
  <Route path="/" component={AppContainer}>

    {GeneralRoutes}
    {AdminRoutes}
    {StudentsRoutes}
    {TrainingRoutes}

    <Route path="*" component={NotFoundPage} />
  </Route>
);
