import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { DashboardPage } from './dashboard/page';
import { EvaluationPage } from './evaluation/page';
import { TrainingListPageContainer } from './training/list/pageContainer';
import { trainerRouteEnums } from '../../common/routeEnums/trainer';
import { EditTrainingContainerPage } from './training/edit/pageContainer';

export const TrainingRoutes = (
  <div>
    <Route path={trainerRouteEnums.training.list} component={TrainingListPageContainer} />
    <Route path={trainerRouteEnums.training.byId.dashboard} component={DashboardPage} />
    <Route path={trainerRouteEnums.training.byId.evaluation} component={EvaluationPage} />
    <Route path={trainerRouteEnums.training.byId.edit} component={EditTrainingContainerPage} />

    <Redirect from={trainerRouteEnums.default} to={trainerRouteEnums.training.list} />
    <Redirect from={trainerRouteEnums.training.byId.base} to={trainerRouteEnums.training.byId.dashboard} />
  </div>
);
