import {
  createFormValidation,
  ValidationConstraints,
  Validators,
} from 'lc-form-validation';

const loginValidationConstraints: ValidationConstraints = {
  fields: {
    login: [
      { validator: Validators.required },
    ],
    password: [
      { validator: Validators.required },
    ],
  },
};

export const loginValidation = createFormValidation(loginValidationConstraints);
