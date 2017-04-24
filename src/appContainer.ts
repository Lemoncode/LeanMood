import { connect } from 'react-redux';
import { App } from './app';
import { IAppState } from './reducers/index';

const mapStateToProps = (state: IAppState) => ({
  userProfile: state.login.userProfile,
});

export const AppContainer = connect(mapStateToProps)(App);
