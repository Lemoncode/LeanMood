import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { GeneralRoutes } from './pages/general/';
import { HeaderComponent } from './common/components/header/header';
import { UserProfile } from './model/userProfile';
import { FooterComponent } from './common/components/footer/footer';
const styles: any = require('./app.scss');

interface Props extends RouteComponentProps<{}, {}> {
  userProfile: UserProfile;
}

export const App: React.StatelessComponent<Props> = (props) => {
  let header = null;

  // Show header if route is not the login one
  if (isNotLoginRoute(props.location.pathname)) {
    header = <HeaderComponent userProfile={props.userProfile} />;
  }

  return (
    <div>
      {header}
      <main className={`${styles.container} container-fluid`}>
        {props.children}
      </main>
      <FooterComponent />
    </div>
  );
};

function isNotLoginRoute(path: string): boolean {
  const loginRoutes = ['/', '/home'];
  return loginRoutes.indexOf(path) === -1;
}
