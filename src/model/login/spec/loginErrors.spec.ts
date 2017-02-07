import {FieldValidationResult} from 'lc-form-validation';
import { ILoginErrors } from '../loginErrors';

describe('ILoginErrors', () => {
  it('Is instantiated and exists', () => {
      // Arrange
      const loginErrors: ILoginErrors = {
        login: new FieldValidationResult(),
        password: new FieldValidationResult(),
      };

      // Assert
      expect(loginErrors).not.to.be.undefined;
      expect(loginErrors).not.to.be.null;
  });
});
