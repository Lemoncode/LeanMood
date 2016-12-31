import * as React from "react";
import * as ReactDOM from "react-dom";
import { IndexRoute, Route, Router } from "react-router";

import { App } from "./app";
import { AdminRoutes } from "./pages/admin";
import { GeneralRoutes, NotFoundPage } from "./pages/general";
import { StudentsRoutes } from "./pages/student";
import { TrainingRoutes } from "./pages/trainer";

export const AppRoutes = (
    <Route  path="/" component={App} >

      {GeneralRoutes}
      {AdminRoutes}
      {StudentsRoutes}
      {TrainingRoutes}

      <Route path="*" component={NotFoundPage} />
    </Route>
);
