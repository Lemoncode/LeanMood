import {} from 'mocha';
import {LoginCredentials} from '../../../model/login/loginCredentials';
import {LoginResponse} from '../../../model/login/loginResponse';
import {loginMockResponses} from '../loginMockData';
import {loginApi} from '../loginAPI';

describe('loginApi', () => {
  it('should be defined', () => {
    // Assert
    expect(loginApi).not.to.be.undefined;
  });

  it(`returns loginResponse.succeded equals false and loginResponse.userProfile equals null
    when pass wrong LoginCredentials`, (done) => {
    // Arrange
    const loginCredentials = new LoginCredentials();
    loginCredentials.login = 'error';
    loginCredentials.password = 'error';

    // Act
    const result = loginApi.login(loginCredentials);

    result.then((loginResponse) => {
      // Assert
      expect(loginResponse.succeded).to.be.false;
      expect(loginResponse.userProfile).to.be.null;
      done();
    });
  });

  it(`returns loginResponse.succeded equals false and loginResponse.userProfile equals null
    when pass wrong password`, (done) => {
    // Arrange
    const loginCredentials = new LoginCredentials();
    loginCredentials.login = 'admin';
    loginCredentials.password = 'error';

    // Act
    const result = loginApi.login(loginCredentials);

    result.then((loginResponse) => {
      // Assert
      expect(loginResponse.succeded).to.be.false;
      expect(loginResponse.userProfile).to.be.null;
      done();
    });
  });

  it(`returns loginResponse.succeded equals true and loginResponse.userProfile.role equals admin
    when pass admin credentials`, (done) => {
    // Arrange
    const loginCredentials = new LoginCredentials();
    loginCredentials.login = 'admin';
    loginCredentials.password = 'test';

    // Act
    const result = loginApi.login(loginCredentials);

    result.then((loginResponse) => {
      // Assert
      expect(loginResponse.succeded).to.be.true;
      expect(loginResponse.userProfile).to.equal(loginMockResponses[0].userProfile);
      done();
    });
  });
});
