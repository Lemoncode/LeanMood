import { LoginCredentials } from '../../../../../model/login/loginCredentials';
import {loginActionEnums} from '../../../../../common/actionEnums/login';
import { loginContentChangedAction } from './../loginContentChanged';

describe('loginContentChanged', () => {
  it('is defined', () => {
    expect(loginContentChangedAction).not.to.be.undefined;
  });

  it('contains the expected type LOGIN_CONTENT_CHANGED', () => {
    // Act
    const actionResult = loginContentChangedAction(null);

    // Assert
    expect(actionResult.type).to.be.equals(loginActionEnums.LOGIN_CONTENT_CHANGED);
  });

  it('contains the expected payload including the login Credentials', () => {
    // Arrange
    const loginCredentials: LoginCredentials = {
      login: 'admin',
      password: 'test',
    };

    // Act
    const actionResult = loginContentChangedAction(loginCredentials);

    // Assert
    expect(actionResult.payload).not.to.be.undefined;
    expect(actionResult.payload).to.be.equal(loginCredentials);
  });
});
