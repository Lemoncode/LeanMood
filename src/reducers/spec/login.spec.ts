import { UserProfile } from './../../model/userProfile';
import { LoginResponse } from './../../model/loginResponse';
import { loginActionEnums } from './../../common/actionEnums/login';
import { LoginCredentials } from './../../model/loginCredentials';
import { loginReducer, LoginState } from './../login';
import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import {} from 'mocha';
import {} from 'core-js';

describe('loginReducer', () => {
  it('is defined', () => {
    // Arrange
    // Act
    // Assert
    expect(loginReducer).not.be.undefined;
  });

  it("should return same state when passing an action that is not expected", () => {
    // Arrange
    const originalState : LoginState = new LoginState();

    const action = {
      type: 'NOT_EXPECTED_ACTION_1'
    }

    // Act
    const newState = loginReducer(originalState, action);

    // Assert
    expect(newState).to.be.equal(originalState);
  });

  it(`should return a new state including new LoginCredentials when
    passing a USERPROFILE_UPDATE_EDITING_LOGIN`,() => {
    // Arrange
    const originalState = new LoginState();

    deepFreeze(originalState);

    const loginCredentials : LoginCredentials =
    {
      login: 'admin',
      password: 'test'
    };

    const actionResult = {
      type: loginActionEnums.USERPROFILE_UPDATE_EDITING_LOGIN,
      payload: loginCredentials
    }

    // Act
    const newState = loginReducer(originalState, actionResult);

    // Assert
    expect(newState.editingLogin).to.eql(loginCredentials);
  });

  it(`should return a new state including new LoginResponse when
    passing a USERPROFILE_PERFORM_LOGIN`,() => {
    // Arrange
    const originalState = new LoginState();

    deepFreeze(originalState);

    const loginReponse : LoginResponse =
    {
      succeded: true,
      userProfile: new UserProfile()
    };

    const actionResult = {
      type: loginActionEnums.USERPROFILE_PERFORM_LOGIN,
      payload: loginReponse
    }

    // Act
    const newState = loginReducer(originalState, actionResult);

    // Assert
    expect(newState.userProfile).to.eql(loginReponse.userProfile);
    expect(newState.isUserLoggedIn).to.eql(loginReponse.succeded);
  });


})