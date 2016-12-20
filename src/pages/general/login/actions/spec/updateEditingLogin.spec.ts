import { LoginCredentials } from './../../../../../model/loginCredentials';
import { updateEditingLogin } from './../updateEditingLogin';
import { expect } from 'chai';
import {} from 'mocha'
import {} from 'core-js'

describe('updateEditingLogin', () => {
  it('is defined', () => {
    expect(updateEditingLogin).not.to.be.undefined;
  });

  it('contains the expected type USERPROFILE_UPDATE_EDITING_LOGIN', () => {
    expect(updateEditingLogin(new LoginCredentials).type).to.be.equals('USERPROFILE_UPDATE_EDITING_LOGIN');
  });

  it('contains the expected payload including the login Credentials', () => {
    // Arrange
    const loginCredentials : LoginCredentials =
    {
      login: 'admin',
      password: 'test'
    };

    // Act
    const actionResult = updateEditingLogin(loginCredentials);

    // Assert
    expect(actionResult.payload).not.to.be.undefined;
    expect(actionResult.payload).to.be.equal(loginCredentials);
  });
})