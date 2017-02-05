import * as React from 'react';
import { shallow } from 'enzyme';
import { multilineTrim } from '../../../../../../../common/parse/multilineTrim';
import { LoginCredentials } from '../../../../../../../model/login/loginCredentials';
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

  it('should renders as expected', () => {
      // Arrange
      const loginCredentials = new LoginCredentials();
      loginCredentials.login = 'admin';
      loginCredentials.password = 'test';

      const onChangeSpy = sinon.spy();
      const onClickSpy = sinon.spy();

      const expectedEmailInput = `
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="text" name="email" class="form-control" placeholder="E-mail" value="admin"
          />
          <div class="help-block">
          </div>
        </div>
      `;

      const expectedPasswordInput = `
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" name="password" class="form-control" placeholder="Password" value="test"
          />
          <div class="help-block">
          </div>
        </div>
      `;
      const expectedComponent = `
        <div class="panel-body">
          <form role="form">
            ${expectedEmailInput}
            ${expectedPasswordInput}
            <button type="submit" class="btn btn-lg btn-success btn-block">
              Login
            </button>
          </form>
        </div>
      `;

      // Act
      const component = shallow(
        <FormComponent
          loginCredentials={loginCredentials}
          loginRequest={onClickSpy}
          updateLoginInfo={onChangeSpy}
        />,
      );

      // Assert
      expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });
});
