import {connect} from 'react-redux';
import {IAppState} from '../../../../../reducers';
import {LoginCredentials} from '../../../../../model/login/loginCredentials';
import {LoginFormComponent} from './loginForm';
import {loginContentChangedCompletedAction} from '../../actions/loginContentChanged';
import {loginRequestStartedAction} from '../../actions/loginRequest';

const mapStateToProps = (state: IAppState) => ({
  loginCredentials : state.login.editingLogin,
});

const mapDispatchToProps = (dispatch) => ({
  updateLoginInfo: (loginCredentials: LoginCredentials) => (dispatch(loginContentChangedCompletedAction(null, null, null))),
  loginRequest: (loginCredentials: LoginCredentials) => (dispatch(loginRequestStartedAction(loginCredentials))),
});

export const LoginFormContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormComponent);
