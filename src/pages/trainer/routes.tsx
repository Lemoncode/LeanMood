import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router';

import { DashboardPage } from './dashboard/page';
import { EvaluationPage } from './evaluation/page';
import { TrainingListPage } from './training/list/page';

export const TrainingRoutes = (
    <div>
      <Route path="/trainers" component={TrainingListPage}/>
      <Route path="/trainers/dashboard" component={DashboardPage}/>
      <Route path="/trainers/evaluation" component={EvaluationPage}/>
    </div>
);
