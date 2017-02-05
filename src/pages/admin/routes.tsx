import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DashboardPage} from './dashboard/page';
import { EditStudentPageContainer } from './student/edit/pageContainer';
import { ListStudentPageContainer } from './student/list/pageContainer';
import { EditTrainingPage } from './training/edit/page';
import { ListTrainingPageContainer } from './training/list/pageContainer';

import { Route } from 'react-router';

// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js
// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
export const AdminRoutes = (
    <div>
      <Route path="/admin" component={DashboardPage}/>
      <Route path="/admin/student/list" component={ListStudentPageContainer}/>
      <Route path="/admin/student/edit" component={EditStudentPageContainer}/>
      <Route path="/admin/training/list" component={ListTrainingPageContainer}/>
      <Route path="/admin/training/edit" component={EditTrainingPage}/>
    </div>
);
