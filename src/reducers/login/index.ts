import { UserProfile } from '../../model/userProfile';
import { LoginResponse } from '../../model/login/loginResponse';
import { LoginCredentials } from '../../model/login/loginCredentials';
import { loginActionEnums } from './../../common/actionEnums/login';

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
      return handleLoginContentChanged(state, action.payload);
    case loginActionEnums.LOGIN_REQUEST:
      return handleLoginRequest(state, action.payload);
    default:
      return state;
  }
};

const handleLoginContentChanged = (state: LoginState, payload: LoginCredentials) => ({
  ...state,
  editingLogin: payload,
});

const handleLoginRequest = (state: LoginState, payload: LoginResponse) => ({
  ...state,
  isUserLoggedIn: payload.succeded,
  userProfile: payload.userProfile,
});
