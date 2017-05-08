import { loginFormValidation } from '../login.validation';
import { LoginCredentials } from '../../../../../../model/login/loginCredentials';

describe('loginFormValidation', () => {
  it('should be an object', () => {
    // Assert
    expect(loginFormValidation).to.be.an('object').not.null;
  });

  it('should validate a "login" field as required', (done) => {
    // Arrange
    const fieldName = 'login';
    const vm: LoginCredentials = {
      login: '',
      password: 'test',
    };

    // Act
    loginFormValidation.validateForm(vm).then((validationResult) => {
      // Assert
      expect(validationResult.succeeded).to.be.false;
      const loginError = validationResult.fieldErrors.find((field) => field.key === fieldName);
      expect(loginError.succeeded).to.be.false;
      done();
    }).catch(done);
  });

  it('should validate a "password" field as required', (done) => {
    // Arrange
    const fieldName = 'password';
    const vm: LoginCredentials = {
      login: 'test',
      password: '',
    };

    // Act
    loginFormValidation.validateForm(vm).then((validationResult) => {
      // Assert
      expect(validationResult.succeeded).to.be.false;
      const loginError = validationResult.fieldErrors.find((field) => field.key === fieldName);
      expect(loginError.succeeded).to.be.false;
      done();
    }).catch(done);
  });

  it('should validate login credentials when both are fulfilled', (done) => {
    // Arrange
    const vm: LoginCredentials = {
      login: 'test',
      password: 'test',
    };

    // Act
    loginFormValidation.validateForm(vm).then((validationResult) => {
      // Assert
      expect(validationResult.succeeded).to.be.true;
      done();
    }).catch(done);
  });
});
