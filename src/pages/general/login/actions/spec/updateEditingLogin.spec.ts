import { LoginCredentials } from './../../../../../model/loginCredentials';
import {loginActionEnums} from '../../../../../common/actionEnums/login';
import { updateEditingLogin } from './../updateEditingLogin';

describe('updateEditingLogin', () => {
  it('is defined', () => {
    expect(updateEditingLogin).not.to.be.undefined;
  });

  it('contains the expected type LOGIN_CONTENT_CHANGED', () => {
    // Act
    const actionResult = updateEditingLogin(null);

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
    const actionResult = updateEditingLogin(loginCredentials);

    // Assert
    expect(actionResult.payload).not.to.be.undefined;
    expect(actionResult.payload).to.be.equal(loginCredentials);
  });
});
