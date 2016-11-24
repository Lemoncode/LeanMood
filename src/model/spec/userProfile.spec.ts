import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import { UserProfile } from '../userProfile'
import {} from 'mocha'
import {} from 'core-js'

describe('userProfile', () => {
  let userProfile = null;

  beforeEach(() => {
    userProfile = new UserProfile();
  })

  it('Is instantiated and exists', () => {
    // Arrange
    // Act
    // Assert
    expect(userProfile).not.to.be.undefined;
    expect(userProfile).not.to.be.null;
  });

  describe('#constructor', () => {
    it('Is initializaed with the expected fields and default values', () => {
      // Arrange
      // Act
      // Assert
      expect(userProfile.id).to.be.equal(-1);
      expect(userProfile.fullname).to.be.equal('');
      expect(userProfile.email).to.be.equal('');
      expect(userProfile.role).to.be.equal('');
    });
  })
});
