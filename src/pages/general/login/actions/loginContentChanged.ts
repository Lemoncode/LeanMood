import { FieldValidationResult } from 'lc-form-validation';
import { loginActionEnums } from './../../../../common/actionEnums/login';
import { LoginCredentials } from '../../../../model/login/loginCredentials';
import { loginValidation } from '../components/loginForm/login.validation';
import { validationsEnums } from '../../../../common/validations/validationEnums';

export const loginContentChangedStartedAction = (viewModel: LoginCredentials, fieldName: string, value: string) => {
  return (dispatcher) => {
    const promise = loginValidation.validateField(viewModel, fieldName, value);

    promise.then((fieldValidationResult) => {
      dispatcher(loginContentChangedCompletedAction(fieldName, value, fieldValidationResult));
    });

    return promise;
  };
};

export interface ILoginContentChangedCompletedPayload {
  fieldName: string;
  value: any;
  fieldValidationResult: FieldValidationResult;
}

export const loginContentChangedCompletedAction =
  (fieldName: string, value: string, fieldValidationResult: FieldValidationResult) => ({
    type: loginActionEnums.LOGIN_CONTENT_CHANGED,
    payload: {
      fieldName,
      value,
      fieldValidationResult,
    },
  });
