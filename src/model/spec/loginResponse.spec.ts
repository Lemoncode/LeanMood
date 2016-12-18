import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import { LoginResponse } from '../loginResponse';
import {} from 'mocha';
import {} from 'core-js';

describe('loginResponse', () => {
    let loginResponse = null;

    beforeEach(() => {
        loginResponse = new LoginResponse();
    });

    it('Is instantiated and exists', () =>{
        //Arrange
        //Act
        //Assert
        expect(loginResponse).not.to.be.undefined;
        expect(loginResponse).not.to.be.null;
    });

    describe('#constructor', () => {
        it('Is initializaed with default values', () => {
            //Arrange
            //Act
            //Assert
            expect(loginResponse.succeded).to.be.false;
            expect(loginResponse.userProfile).to.be.equal(loginResponse.userProfile);
        });
    });

});
