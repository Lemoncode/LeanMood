import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { MainTocPage } from './main-toc/page';
import { studentRouteEnums } from '../../common/routeEnums/student';
import { ListTrainingPageContainer } from './training/list/pageContainer';

// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js
// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
export const StudentsRoutes = (
  <div>
    <Route path={studentRouteEnums.default} component={ListTrainingPageContainer}/>
    <Route path={studentRouteEnums.training} component={MainTocPage}/>
  </div>
);
