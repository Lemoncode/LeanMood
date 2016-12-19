import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { LoginCredentials } from '../../../../../model/loginCredentials';
import { LoginFormComponent } from '../loginForm';
import { multilineTrim }  from '../../../../../common/parse/multilineTrim';

describe('LoginFormComponent', () => {
    const loginCredentials = new LoginCredentials();

    it('should be defined', () => {
        //Arrange
        loginCredentials.login = 'admin'
        loginCredentials.password = 'test'
        //Act
        const onChangeSpy = sinon.spy();
        const onClickSpy = sinon.spy();
        const loginFormComponent = shallow(
            <LoginFormComponent loginCredentials={loginCredentials} 
                                performLogin={onClickSpy} 
                                updateLoginInfo={onChangeSpy}/>
        )
        //Assert
        expect(loginFormComponent).not.to.be.undefined;
    });

    it('Should display login Credentials', () => {
        //Arrange
        loginCredentials.login = 'admin'
        loginCredentials.password = 'test'
        //Act
        const onChangeSpy = sinon.spy();
        const onClickSpy = sinon.spy();
        const loginFormComponent = shallow(
            <LoginFormComponent loginCredentials={loginCredentials} 
                                performLogin={onClickSpy} 
                                updateLoginInfo={onChangeSpy}/>
        )
        //Assert
        const expectedDomTree = `
            <div class="panel-body">
                <form role="form">
                    <fieldset>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="E-mail" name="email" value="admin"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" name="password" value="test"/>
                    </div>
                    <button type="submit" class="btn btn-lg btn-success btn-block">
                        Login
                    </button>
                </fieldset>
                </form>
            </div>
        `;

        const plainDomTree = multilineTrim(expectedDomTree);
        expect(loginFormComponent.html()).to.be.equal(plainDomTree);
    });

});