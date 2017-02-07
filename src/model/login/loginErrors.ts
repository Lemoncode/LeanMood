import {FieldValidationResult} from 'lc-form-validation';

export interface ILoginErrors {
  login: FieldValidationResult;
  password: FieldValidationResult;
};
