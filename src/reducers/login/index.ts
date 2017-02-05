import {FieldValidationResult} from 'lc-form-validation';
import { UserProfile } from '../../model/userProfile';
import { LoginResponse } from '../../model/login/loginResponse';
import { LoginCredentials } from '../../model/login/loginCredentials';
import {ILoginErrors} from '../../model/login/loginErrors';
import { loginActionEnums } from './../../common/actionEnums/login';
import {ILoginContentChangedCompleted} from '../../pages/general/login/actions/loginContentChanged';

export class LoginState {
  public editingLogin: LoginCredentials;
  public isUserLoggedIn: boolean;
  public userProfile: UserProfile;
  public loginErrors: ILoginErrors;

  constructor() {
    this.editingLogin = new LoginCredentials();
    this.isUserLoggedIn = false;
    this.userProfile = new UserProfile();
    this.loginErrors = {login: new FieldValidationResult(), password: new FieldValidationResult()};
  }
};

export const loginReducer = (state: LoginState = new LoginState(), action) => {
  switch (action.type) {
    case loginActionEnums.LOGIN_CONTENT_CHANGED:
      return handleLoginContentChanged(state, action.payload);
    case loginActionEnums.LOGIN_REQUEST:
      return handleLoginRequest(state, action.payload);
    default:
      return state;
  }
};

const handleLoginContentChanged = (state: LoginState, payload: ILoginContentChangedCompleted) => ({
  ...state,
  editingLogin: {
    ...state.editingLogin,
    [payload.fieldName]: payload.value,
  },
  loginErrors: {
    ...state.loginErrors,
    [payload.fieldName]: payload.fieldValidationResult,
  },
});

const handleLoginRequest = (state: LoginState, payload: LoginResponse) => ({
  ...state,
  isUserLoggedIn: payload.succeded,
  userProfile: payload.userProfile,
});
