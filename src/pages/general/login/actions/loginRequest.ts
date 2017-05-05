import * as toastr from 'toastr';
import { loginApi } from '../../../../rest-api/login/loginAPI';
import { LoginCredentials } from '../../../../model/login/loginCredentials';
import { loginActionEnums } from './../../../../common/actionEnums/login';
import { LoginResponse } from '../../../../model/login/loginResponse';
import { navigationHelper } from '../../../../common/helper/navigationHelper/';
import { loginFormValidation } from '../components/loginForm/login.validation';
import { FormValidationResult } from 'lc-form-validation';

const LOGIN_ERROR = 'Please, review your email or password';

export const loginRequestStartedAction = (loginCredentials: LoginCredentials) => {
  return (dispatcher) => {
    // Let's remove any previous toast
    toastr.remove();

    const promise = loginFormValidation.validateForm(loginCredentials);

    promise
      .then((formValidationResult) => {
        if (formValidationResult.succeeded) {
          loginApi.login(loginCredentials).then((response) => {
            if (response.succeded) {
              dispatcher(loginRequestCompletedAction(response));
              navigationHelper.navigateToPath(`/${response.userProfile.role}`);
            } else {
              toastr.error(LOGIN_ERROR);
            }
          });
        } else {
          toastr.error(LOGIN_ERROR);
        }
      });

    return promise;
  };
};

export const loginRequestCompletedAction = (loginResponse: LoginResponse) => ({
  type: loginActionEnums.LOGIN_REQUEST,
  payload: loginResponse,
});
