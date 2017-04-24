import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { GeneralRoutes } from './pages/general/';
import { HeaderComponent } from './common/components/header/header';

export class App extends React.Component<RouteComponentProps<{}, {}>, {}> {
  public render() {
    let header = null;

    // Show header if route is not the login one
    if (this.isNotLoginRoute(this.props.location.pathname)) {
      header = <HeaderComponent />;
    }

    return (
      <div>
        {header}
        <main className="container-fluid">
          {this.props.children}
        </main>
      </div>
    );
  }

  private isNotLoginRoute(path) {
    const loginRoutes = ['/', '/home'];
    return loginRoutes.indexOf(path) === -1;
  }
}
