import * as React from 'react';
import { shallow } from 'enzyme';
import { multilineTrim } from '../../../../../../../common/parse/multilineTrim';
import { LoginCredentials } from '../../../../../../../model/loginCredentials';
import { FormComponent } from '../form';

describe('FormComponent', () => {
    it('should be defined', () => {
        // Arrange
        const loginCredentials = new LoginCredentials();
        loginCredentials.login = 'admin';
        loginCredentials.password = 'test';

        const onChangeSpy = sinon.spy();
        const onClickSpy = sinon.spy();

        // Act
        const loginFormComponent = shallow(
          <FormComponent
            loginCredentials={loginCredentials}
            loginRequest={onClickSpy}
            updateLoginInfo={onChangeSpy}
          />,
        );

        // Assert
        expect(loginFormComponent).not.to.be.undefined;
    });

    it('Should display login Credentials', () => {
        // Arrange
        const loginCredentials = new LoginCredentials();
        loginCredentials.login = 'admin';
        loginCredentials.password = 'test';

        const onChangeSpy = sinon.spy();
        const onClickSpy = sinon.spy();

        const expectedDomTree = `
          <div class="panel-body">
            <form role="form">
              <fieldset>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="E-mail"
                    name="email"
                    value="admin"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    name="password"
                    value="test"
                  />
                </div>
                <button type="submit" class="btn btn-lg btn-success btn-block">
                  Login
                </button>
              </fieldset>
            </form>
          </div>
          `;

        // Act
        const loginFormComponent = shallow(
          <FormComponent
            loginCredentials={loginCredentials}
            loginRequest={onClickSpy}
            updateLoginInfo={onChangeSpy}
          />,
        );

        // Assert
        expect(loginFormComponent.html()).to.equal(multilineTrim(expectedDomTree));
    });
});
