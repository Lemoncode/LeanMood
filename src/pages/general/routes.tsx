import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';
import { LoginPage } from './login/page';
import { LoginContainer } from './login/pageContainer';


// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js
// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
export const GeneralRoutes = (
  <div>
    <IndexRoute component={LoginContainer}/>
    <Route path="/home" component={LoginContainer} />
  </div>

)
