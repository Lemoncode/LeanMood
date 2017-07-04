import * as React from 'react';
import { Route } from 'react-router';
import { DashboardPage} from './dashboard/page';
import { EditStudentPageContainer } from './student/edit/pageContainer';
import { ListStudentPageContainer } from './student/list/pageContainer';
import { EditTrainingPage } from './training/edit/page';
import { ListTrainingPageContainer } from './training/list/pageContainer';
import {adminRouteEnums} from '../../common/routeEnums/admin';

// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js
// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
export const AdminRoutes = (
    <div>
      <Route path={adminRouteEnums.default} component={DashboardPage}/>
      <Route path={adminRouteEnums.student.list} component={ListStudentPageContainer}/>
      <Route path={`${adminRouteEnums.student.edit}/:id`} component={EditStudentPageContainer}/>
      <Route path={adminRouteEnums.training.list} component={ListTrainingPageContainer}/>
      <Route path={adminRouteEnums.training.edit} component={EditTrainingPage}/>
    </div>
);
