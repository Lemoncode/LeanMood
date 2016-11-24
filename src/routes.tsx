import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import { App } from './app';
import { GeneralRoutes, NotFoundPage } from './pages/general'
import { AdminRoutes } from './pages/admin';
import { StudentsRoutes } from './pages/students';

export const AppRoutes = (
    <Route  path="/" component={App} >

      {GeneralRoutes}
      {AdminRoutes}
      {StudentsRoutes}

      <Route path="*" component={NotFoundPage} />
    </Route>
)
