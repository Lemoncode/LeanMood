import { LoginCredentials } from '../loginCredentials';

describe('loginCredentials', () => {
  it('Is instantiated and exists', () => {
    // Arrange
    const loginCredentials = new LoginCredentials();

    // Assert
    expect(loginCredentials).not.to.be.undefined;
    expect(loginCredentials).not.to.be.null;
  });

  describe('#constructor', () => {
    it('Is initialized with default values', () => {
      // Arrange
      const loginCredentials = new LoginCredentials();

      // Assert
      expect(loginCredentials.login).to.be.equal('');
      expect(loginCredentials.password).to.be.equal('');
    });
  });
});
