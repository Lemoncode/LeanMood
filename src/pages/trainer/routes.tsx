import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router'

import { TrainingListPage } from './training/list/page'

export const AdminRoutes = (

    <div>
      <Route path='/training/list' component={TrainingListPage}/>
    </div>

);
