import { loginActionEnums } from './../../../../common/actionEnums/login';
import { LoginCredentials } from './../../../../model/loginCredentials';

export const updateEditingLogin = (loginCredentials: LoginCredentials) => ({
  type: loginActionEnums.USERPROFILE_UPDATE_EDITING_LOGIN,
  payload: loginCredentials
});