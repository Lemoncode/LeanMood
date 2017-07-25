import { BaseFormValidation } from 'lc-form-validation';
import { requiredValidationHandler } from '../../../../../common/validations/required';

class EditStudentValidation extends BaseFormValidation {
  public constructor() {
    super();

    this._validationEngine.initialize([
      { formFieldName: 'fullname', vmFieldName: 'fullname' },
      { formFieldName: 'email', vmFieldName: 'email' },
    ]);

    this._validationEngine.addFieldValidation(
      'login',
      requiredValidationHandler,
    );

    this._validationEngine.addFieldValidation(
      'email',
      requiredValidationHandler,
    );
  }
}

export const editStudentValidation = new EditStudentValidation();
