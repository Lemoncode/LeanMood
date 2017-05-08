import * as React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { routes } from './routes';
import { store } from './store';

interface Props {
  store: any;
  history: any;
}

export class Root extends React.Component<Props, {}> {
  public render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router key={Math.random()} history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}
