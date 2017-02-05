import {BaseFormValidation} from 'lc-form-validation';
import {requiredValidationHandler} from '../../../../../common/validations/required';

// TODO: Add unit tests (issues with mocking BaseFormValidation)

class LoginValidation extends BaseFormValidation {
  public constructor() {
    super();

    this._validationEngine.initialize([
      { formFieldName: 'login', vmFieldName: 'login' },
      { formFieldName: 'password', vmFieldName: 'password' },
    ]);

    this._validationEngine.addFieldValidation(
      'login',
      requiredValidationHandler,
    );

    this._validationEngine.addFieldValidation(
      'password',
      requiredValidationHandler,
    );
  }
}

export const loginValidation = new LoginValidation();
