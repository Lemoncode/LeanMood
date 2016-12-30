import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DashboardPage} from './dashboard/page'
import { ListStudentPageContainer } from './student/list/pageContainer'
import { EditStudentPage } from './student/edit/page'
<<<<<<< HEAD
import { ListTrainingPage } from './training/list/page'
import { EditTrainingPageContainer } from './training/edit/pageContainer'
=======
import { ListTrainingPageContainer } from './training/list/pageContainer'
import { EditTrainingPage } from './training/edit/page'
>>>>>>> 5541906c0f761bfd48de9d0580e7dcda3a3d4650


import { Route } from 'react-router'

// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js
// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
export const AdminRoutes = (

    <div>
      <Route path='/admin' component={DashboardPage}/>
      <Route path='/admin/student/list' component={ListStudentPageContainer}/>
      <Route path='/admin/student/edit' component={EditStudentPage}/>
<<<<<<< HEAD
      <Route path='/admin/training/list' component={ListTrainingPage}/>
      <Route path='/admin/training/edit/:id' component={EditTrainingPageContainer}/>
=======
      <Route path='/admin/training/list' component={ListTrainingPageContainer}/>
      <Route path='/admin/training/edit' component={EditTrainingPage}/>
>>>>>>> 5541906c0f761bfd48de9d0580e7dcda3a3d4650
    </div>

);
