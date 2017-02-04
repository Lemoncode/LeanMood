import { UserProfile } from './../model/userProfile';
import { LoginResponse } from './../model/loginResponse';
import { LoginCredentials } from './../model/loginCredentials';
import { loginActionEnums } from './../common/actionEnums/login';

export class LoginState {
  public editingLogin: LoginCredentials;
  public isUserLoggedIn: boolean;
  public userProfile: UserProfile;

  constructor() {
    this.editingLogin = new LoginCredentials();
    this.isUserLoggedIn = false;
    this.userProfile = new UserProfile();
  }
};

export const loginReducer = (state: LoginState = new LoginState(), action) => {
  switch (action.type) {
    case loginActionEnums.LOGIN_CONTENT_CHANGED:
      return handleUpdateEditingLogin(state, action.payload);
    case loginActionEnums.LOGIN_REQUEST:
      return handlePerformLogin(state, action.payload);
    default:
      return state;
  }
};

const handleUpdateEditingLogin = (state: LoginState, payload: LoginCredentials) => {
  return {
    ...state,
    editingLogin: payload,
  };
};

const handlePerformLogin = (state: LoginState, payload: LoginResponse) => {
  return {
    ...state,
    isUserLoggedIn: payload.succeded,
    userProfile: payload.userProfile,
  };
};
