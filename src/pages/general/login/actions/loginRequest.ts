import { loginApi } from '../../../../rest-api/login/loginAPI';
import { LoginCredentials } from './../../../../model/loginCredentials';
import { loginActionEnums } from './../../../../common/actionEnums/login';
import { LoginResponse } from './../../../../model/loginResponse';
import { navigationHelper } from '../helper/navigateBasedOnRole';

export const loginRequestStartedAction = (loginCredentials: LoginCredentials) => {
  return (dispatcher) => {
    const promise = loginApi.login(loginCredentials);

    promise.then((data) => {
      dispatcher(loginRequestCompletedAction(data));

      if (data.succeded) {
        navigationHelper.navigateToHomeBasedOnRole(`/${data.userProfile.role}`);
      }
    });

    return promise;
  };
};

export const loginRequestCompletedAction = (loginResponse: LoginResponse) => ({
  type: loginActionEnums.LOGIN_REQUEST,
  payload: loginResponse,
});
