import { LoginResponse } from '../loginResponse';

describe('loginResponse', () => {
  it('Is instantiated and exists', () => {
      // Arrange
      const loginResponse = new LoginResponse();

      // Assert
      expect(loginResponse).not.to.be.undefined;
      expect(loginResponse).not.to.be.null;
  });

  describe('#constructor', () => {
    it('Is initialized with default values', () => {
      // Arrange
      const loginResponse = new LoginResponse();

      // Assert
      expect(loginResponse.succeded).to.be.false;
      expect(loginResponse.userProfile).to.be.equal(loginResponse.userProfile);
    });
  });

});
