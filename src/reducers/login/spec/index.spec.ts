import { FieldValidationResult } from 'lc-form-validation';
import { UserProfile } from '../../../model/userProfile';
import { LoginResponse } from '../../../model/login/loginResponse';
import { loginActionEnums } from '../../../common/actionEnums/login';
import { LoginCredentials } from '../../../model/login/loginCredentials';
import { loginReducer, LoginState } from '../index';
import * as deepFreeze from 'deep-freeze';

describe('loginReducer', () => {
  it('should be a function', () => {
    // Assert
    expect(loginReducer).to.be.a('function');
  });

  it('should return same state when passing an action that is not expected', () => {
    // Arrange
    const originalState: LoginState = new LoginState();
    const action = {
      type: 'NOT_EXPECTED_ACTION_1',
    };
    deepFreeze(originalState);

    // Act
    const newState = loginReducer(originalState, action);

    // Assert
    expect(newState).to.be.equal(originalState);
  });

  it(`should return a new state including new LoginCredentials when
    passing a LOGIN_CONTENT_CHANGED and fieldName equals login`, () => {
      // Arrange
      const originalState = new LoginState();
      const loginValidationResult = new FieldValidationResult();
      loginValidationResult.succeeded = true;

      const actionResult = {
        type: loginActionEnums.LOGIN_CONTENT_CHANGED,
        payload: {
          fieldName: 'login',
          value: 'test',
          fieldValidationResult: loginValidationResult,
        },
      };
      deepFreeze(originalState);

      // Act
      const newState = loginReducer(originalState, actionResult);

      // Assert
      expect(newState.editingLogin.login).to.equal(actionResult.payload.value);
      expect(newState.loginErrors.login.succeeded).to.equal(loginValidationResult.succeeded);
    });

  it(`should return a new state including new LoginCredentials when
    passing a LOGIN_CONTENT_CHANGED and fieldName equals password`, () => {
      // Arrange
      const originalState = new LoginState();
      const loginValidationResult = new FieldValidationResult();
      loginValidationResult.succeeded = true;

      const actionResult = {
        type: loginActionEnums.LOGIN_CONTENT_CHANGED,
        payload: {
          fieldName: 'password',
          value: 'test',
          fieldValidationResult: loginValidationResult,
        },
      };
      deepFreeze(originalState);

      // Act
      const newState = loginReducer(originalState, actionResult);

      // Assert
      expect(newState.editingLogin.password).to.equal(actionResult.payload.value);
      expect(newState.loginErrors.password.succeeded).to.equal(loginValidationResult.succeeded);
    });

  it(`should return a new state including new LoginResponse when passing a LOGIN_REQUEST_SUCCESS`, () => {
    // Arrange
    const originalState = new LoginState();

    const loginReponse: LoginResponse = {
      succeded: true,
      userProfile: new UserProfile(),
    };

    const actionResult = {
      type: loginActionEnums.LOGIN_REQUEST_SUCCESS,
      payload: loginReponse,
    };
    deepFreeze(originalState);

    // Act
    const newState = loginReducer(originalState, actionResult);

    // Assert
    expect(newState.userProfile).to.equal(loginReponse.userProfile);
  });

  it('should return a new state with the new field errors when passing a LOGIN_REQUEST_ERROR', () => {
    // Arrange
    const originalState: LoginState = new LoginState();
    const loginError: FieldValidationResult = { ...new FieldValidationResult(), key: 'login' };
    const passwordError: FieldValidationResult = { ...new FieldValidationResult(), key: 'password' };
    const fieldErrors: FieldValidationResult[] = [loginError, passwordError];
    const action = {
      type: loginActionEnums.LOGIN_REQUEST_ERROR,
      payload: fieldErrors,
    };
    deepFreeze(originalState);

    const expectedState: LoginState = {
      ...originalState,
      loginErrors: {
        login: loginError,
        password: passwordError,
      },
    };

    // Act
    const newState = loginReducer(originalState, action);

    // Assert
    expect(newState).to.be.deep.equals(expectedState);
  });
});
