import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { DashboardPage } from './dashboard/page';
import { EvaluationPage } from './evaluation/page';
import { TrainingListPage } from './training/list/page';
import {trainerRouteEnums} from '../../common/routeEnums/trainer';

export const TrainingRoutes = (
    <div>
      <Route path={trainerRouteEnums.default} component={TrainingListPage}/>
      <Route path={trainerRouteEnums.dashboard} component={DashboardPage}/>
      <Route path={trainerRouteEnums.evaluation} component={EvaluationPage}/>
    </div>
);
