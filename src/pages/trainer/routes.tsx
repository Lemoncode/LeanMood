import * as React from 'react';
import { Route } from 'react-router';
import { DashboardPage } from './dashboard/page';
import { EvaluationPage } from './evaluation/page';
import { TrainingListPage } from './training/list/page';
import {trainerRouteEnums} from '../../common/routeEnums/trainer';
import {EditTrainingContainerPage} from './training/edit/pageContainer';

export const TrainingRoutes = (
    <div>
      <Route path={trainerRouteEnums.default} component={TrainingListPage}/>
      <Route path={trainerRouteEnums.dashboard} component={DashboardPage}/>
      <Route path={trainerRouteEnums.evaluation} component={EvaluationPage}/>
      <Route path={`${trainerRouteEnums.training.edit}/:trainingId`} component={EditTrainingContainerPage}/>
    </div>
);
