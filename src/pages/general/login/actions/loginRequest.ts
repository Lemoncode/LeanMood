import { LoginApi } from './../../../../rest-api/login';
import { LoginCredentials } from './../../../../model/loginCredentials';
import { loginActionEnums } from './../../../../common/actionEnums/login';
import { LoginResponse } from './../../../../model/loginResponse';
import { navigationHelper } from '../helper/navigateBasedOnRole';

export const loginRequestStartedAction = (loginCredentials: LoginCredentials) => {
  return (dispatcher) => {
    const promise = LoginApi.login(loginCredentials);

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
