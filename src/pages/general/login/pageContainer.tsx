import { connect } from 'react-redux';
import { IAppState } from '../../../reducers';
import { LoginPage } from './page';
import { LoginCredentials } from '../../../model/loginCredentials';
import { loginContentChangedAction } from './actions/loginContentChanged';
import { loginRequestStartedAction } from './actions/loginRequest';

const mapStateToProps = (state: IAppState) => ({
  loginCredentials : state.login.editingLogin,
});

const mapDispatchToProps = (dispatch) => ({
  updateLoginInfo: (loginCredentials: LoginCredentials) => (dispatch(loginContentChangedAction(loginCredentials))),
  performLogin: (loginCredentials: LoginCredentials) => (dispatch(loginRequestStartedAction(loginCredentials))),
});

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
