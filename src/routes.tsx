import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';

import {App} from './components/app';
import {Login} from './components/pages/login';
import {Admin, AdminRoutes} from './components/pages/admin';
import {TrainingPage, StudentsRoutes} from './components/pages/students';
import {NoMatchPage} from './components/pages/noMatch';

export const AppRoutes = (
    <Route  path="/" component={App} >
      <IndexRoute component={Login}/>
      <Route path="/home" component={Login} />
      <Route path="/trainers" component={TrainingPage}/>
      {AdminRoutes}
      {StudentsRoutes}
      <Route path="*" component={NoMatchPage} />
    </Route>
)