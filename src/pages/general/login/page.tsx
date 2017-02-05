import * as React from 'react';
import {Link} from 'react-router';
import {adminRouteEnums} from '../../../common/routeEnums/admin';
import {trainerRouteEnums} from '../../../common/routeEnums/trainer';
import { LoginCredentials } from '../../../model/loginCredentials';
import { LoginFormContainerComponent } from './components/loginForm';

export const LoginPage = () => {
    return (
      <div>
        <LoginFormContainerComponent />
        <footer className="footer">
          <Link to="/nonexistingpage">Navigate to a 404 page.</Link>
        </footer>
      </div>
    );
};
