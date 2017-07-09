import * as toastr from 'toastr';
import { loginApi } from '../../../../rest-api/login';
import { LoginCredentials } from '../../../../model/login/loginCredentials';
import { loginActionEnums } from './../../../../common/actionEnums/login';
import { LoginResponse } from '../../../../model/login/loginResponse';
import { navigationHelper } from '../../../../common/helper/navigationHelper/';
import { loginFormValidation } from '../components/loginForm/login.validation';
import { FormValidationResult, FieldValidationResult } from 'lc-form-validation';

export const loginErrorMessages = {
  validation: 'There are errors in form. Please fix them before continuing',
  credentials: 'Incorrect credentials. Please, review your email or password',
};

export const loginRequestStartedAction = (loginCredentials: LoginCredentials) => {
  return (dispatch) => {
    // Let's remove any previous toast
    toastr.remove();

    const promise = loginFormValidation.validateForm(loginCredentials);

    promise
      .then((formValidationResult) => {
        if (formValidationResult.succeeded) {
          loginApi.login(loginCredentials).then((response) => {
            if (response.succeded) {
              dispatch(loginRequestSuccessAction(response));
              navigationHelper.navigateToPath(`/${response.userProfile.role}`);
            } else {
              toastr.error(loginErrorMessages.credentials);
            }
          });
        } else {
          dispatch(loginRequestErrorAction(formValidationResult.fieldErrors));
          toastr.error(loginErrorMessages.validation);
        }
      });

    return promise;
  };
};

const loginRequestSuccessAction = (loginResponse: LoginResponse) => ({
  type: loginActionEnums.LOGIN_REQUEST_SUCCESS,
  payload: loginResponse,
});

const loginRequestErrorAction = (formValidationErrors: FieldValidationResult[]) => ({
  type: loginActionEnums.LOGIN_REQUEST_ERROR,
  payload: formValidationErrors,
});
