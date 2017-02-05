import { loginActionEnums } from './../../../../common/actionEnums/login';
import { LoginCredentials } from '../../../../model/login/loginCredentials';

export const loginContentChangedAction = (loginCredentials: LoginCredentials) => ({
  type: loginActionEnums.LOGIN_CONTENT_CHANGED,
  payload: loginCredentials,
});
