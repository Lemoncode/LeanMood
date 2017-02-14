import {FieldValidationResult} from 'lc-form-validation';
import {validationsEnums} from './validationEnums';

export const requiredValidationHandler = (vm: any, value: string): FieldValidationResult => {
  return {
    key: '',
    type: validationsEnums.REQUIRED.FIELD.TYPE,
    succeeded: (value != null && value.length > 0),
    errorMessage: validationsEnums.REQUIRED.FIELD.MESSAGE,
  };
};
