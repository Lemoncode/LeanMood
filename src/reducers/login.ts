import { UserProfile } from './../model/userProfile';
import { LoginResponse } from './../model/loginResponse';
import { LoginCredentials } from './../model/loginCredentials';
import { loginActionEnums } from './../common/actionEnums/login';

export class LoginState {
  editingLogin : LoginCredentials;
  isUserLoggedIn : boolean;
  userProfile : UserProfile;

  constructor() {
    this.editingLogin = new LoginCredentials();
    this.isUserLoggedIn = false;
    this.userProfile = new UserProfile();
  }
}


export const loginReducer = (state: LoginState = new LoginState, action) => {
  switch(action.type) {
    case loginActionEnums.USERPROFILE_UPDATE_EDITING_LOGIN:
      return handleUpdateEditingLogin(state, action.payload);
    case loginActionEnums.USERPROFILE_PERFORM_LOGIN:
      return handlePerformLogin(state, action.payload);
  }
  return state;
}

const handleUpdateEditingLogin = (state : LoginState, payload : LoginCredentials) => {
  const newState = Object.assign({}, state, {editingLogin: payload})
  return newState;
}

const handlePerformLogin = (state: LoginState, payload: LoginResponse) => {
  const newState = Object.assign({}, state, 
                  {
                    isUserLoggedIn: payload.succeded, 
                    userProfile: payload.userProfile
                  })
  return newState;
}