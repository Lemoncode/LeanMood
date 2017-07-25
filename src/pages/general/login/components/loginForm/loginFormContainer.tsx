import {connect} from 'react-redux';
import {IAppState} from '../../../../../reducers';
import {LoginCredentials} from '../../../../../model/login/loginCredentials';
import {LoginFormComponent} from './loginForm';
import {loginContentChangedStartedAction} from '../../actions/loginContentChanged';
import {loginRequestStartedAction} from '../../actions/loginRequest';
import {testAction} from '../../actions/test';

const mapStateToProps = (state: IAppState) => ({
  loginCredentials: state.login.editingLogin,
  loginErrors: state.login.loginErrors,
});

const mapDispatchToProps = (dispatch) => ({
  updateLoginInfo: (viewModel: LoginCredentials, fieldName: string, value: string) =>
    (dispatch(loginContentChangedStartedAction(viewModel, fieldName, value))),
  loginRequest: (loginCredentials: LoginCredentials) => (dispatch(loginRequestStartedAction(loginCredentials))),
  test: () => (dispatch(testAction())), // TODO: Remove this.
});

export const LoginFormContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormComponent);
