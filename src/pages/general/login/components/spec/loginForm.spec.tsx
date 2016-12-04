import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { LoginCredentials } from '../../../../../model/loginCredentials';
import { LoginFormComponent } from '../loginForm';

describe('LoginFormComponent', () => {
    const loginCredentials = new LoginCredentials();

    it('should be defined', () => {
        //Arrange
        loginCredentials.login = 'admin'
        loginCredentials.password = 'test'
        //Act
        // const loginFormComponent = shallow(
        //     <LoginFormComponent loginCredentials={loginCredentials} performLogin={} updateLoginInfo={}/>
        // )
        // //Assert
        // expect(loginFormComponent).not.to.be.undefined;
    });

});