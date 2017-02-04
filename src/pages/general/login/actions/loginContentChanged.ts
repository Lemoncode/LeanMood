import { loginActionEnums } from './../../../../common/actionEnums/login';
import { LoginCredentials } from './../../../../model/loginCredentials';

export const loginContentChangedAction = (loginCredentials: LoginCredentials) => ({
  type: loginActionEnums.LOGIN_CONTENT_CHANGED,
  payload: loginCredentials,
});
