import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import { LoginCredentials } from '../loginCredentials';
import {} from 'mocha';
import {} from 'core-js';

describe('loginCredentials', () => {
    let loginCredentials = null;

    beforeEach(() => {
        loginCredentials = new LoginCredentials();
    });

    it('Is instantiated and exists', () => {
        // Arrange
        // Act
        // Assert
        expect(loginCredentials).not.to.be.undefined;
        expect(loginCredentials).not.to.be.null;
    });

    describe('#constructor', () => {
        it('Is initializaed with default values', () => {
            // Arrange
            // Act
            // Assert
            expect(loginCredentials.login).to.be.equal('');
            expect(loginCredentials.password).to.be.equal('');
        });
    });

});
