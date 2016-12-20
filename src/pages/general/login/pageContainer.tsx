import { connect } from 'react-redux';
import { IAppState } from '../../../reducers';
import { LoginPage } from './page';
import { LoginCredentials } from '../../../model/loginCredentials';
import { updateEditingLogin } from './actions/updateEditingLogin';
import { loginRequestStarted } from './actions/loginRequest';

const mapStateToProps = (state: IAppState) => ({
  loginCredentials : state.login.editingLogin
});

const mapDispatchToProps = (dispatch) => ({
  updateLoginInfo: (loginCredentials: LoginCredentials) => { return dispatch(updateEditingLogin(loginCredentials))},
  performLogin: (loginCredentials: LoginCredentials) => { return dispatch(loginRequestStarted(loginCredentials))},
})

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)