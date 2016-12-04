import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router'

import { TrainingListPage } from './training/list/page'
import { DashboardPage } from '../admin/dashboard/page'

export const TrainingRoutes = (

    <div>
      <Route path='/trainers' component={TrainingListPage}/>
      <Route path='/trainers/dashboard' component={DashboardPage}/>
    </div>

);
