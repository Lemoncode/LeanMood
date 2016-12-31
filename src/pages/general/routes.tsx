import * as React from "react";
import * as ReactDOM from "react-dom";
import { IndexRoute, Route } from "react-router";
import { LoginPage } from "./login/page";

// http://stackoverflow.com/questions/35048738/react-router-import-routes
// AssembliesRoutes.js
// http://randycoulman.com/blog/2016/02/02/composing-routes-in-react-router/
export const GeneralRoutes = (
  <div>
    <IndexRoute component={LoginPage}/>
    <Route path="/home" component={LoginPage} />
  </div>
);
