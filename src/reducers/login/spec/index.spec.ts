import { UserProfile } from '../../../model/userProfile';
import { LoginResponse } from '../../../model/loginResponse';
import { loginActionEnums } from '../../../common/actionEnums/login';
import { LoginCredentials } from '../../../model/loginCredentials';
import { loginReducer, LoginState } from '../index';

describe('loginReducer', () => {
  it('should be defined', () => {
    // Assert
    expect(loginReducer).not.be.undefined;
  });

  it('should return same state when passing an action that is not expected', () => {
    // Arrange
    const originalState: LoginState = new LoginState();

    const action = {
      type: 'NOT_EXPECTED_ACTION_1',
    };

    // Act
    const newState = loginReducer(originalState, action);

    // Assert
    expect(newState).to.be.equal(originalState);
  });

  it(`should return a new state including new LoginCredentials when
    passing a LOGIN_CONTENT_CHANGED`, () => {
    // Arrange
    const originalState = new LoginState();

    const loginCredentials: LoginCredentials = {
      login: 'admin',
      password: 'test',
    };

    const actionResult = {
      type: loginActionEnums.LOGIN_CONTENT_CHANGED,
      payload: loginCredentials,
    };

    // Act
    Object.freeze(originalState);
    const newState = loginReducer(originalState, actionResult);

    // Assert
    expect(newState.editingLogin).to.equal(loginCredentials);
    expect(originalState).to.be.frozen;
  });

  it(`should return a new state including new LoginResponse when passing a LOGIN_REQUEST`, () => {
    // Arrange
    const originalState = new LoginState();

    const loginReponse: LoginResponse = {
      succeded: true,
      userProfile: new UserProfile(),
    };

    const actionResult = {
      type: loginActionEnums.LOGIN_REQUEST,
      payload: loginReponse,
    };

    // Act
    Object.freeze(originalState);
    const newState = loginReducer(originalState, actionResult);

    // Assert
    expect(newState.userProfile).to.equal(loginReponse.userProfile);
    expect(newState.isUserLoggedIn).to.equal(loginReponse.succeded);
    expect(originalState).to.be.frozen;
  });
});
