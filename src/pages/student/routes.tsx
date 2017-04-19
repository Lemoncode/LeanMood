import * as React from 'react';
import { Route } from 'react-router';
import { TrainingTOCPageContainer } from './training/toc/pageContainer';
import { TrainingListPage } from './training/list/page';
import { studentRouteEnums } from '../../common/routeEnums/student';

// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js
// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
export const StudentsRoutes = (
  <div>
    <Route path={studentRouteEnums.defaultPath} component={TrainingListPage} />
    <Route path={studentRouteEnums.trainingRoute} component={TrainingListPage} />
    <Route path={studentRouteEnums.trainingList} component={TrainingListPage} />
    <Route path={studentRouteEnums.trainingTOC} component={TrainingTOCPageContainer} />
  </div>
);
