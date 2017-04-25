import * as React from 'react';
import { shallow } from 'enzyme';
import {FieldValidationResult} from 'lc-form-validation';
import { multilineTrim } from '../../../../../../../common/parse/multilineTrim';
import { LoginCredentials } from '../../../../../../../model/login/loginCredentials';
import {ILoginErrors} from '../../../../../../../model/login/loginErrors';
import { FormComponent } from '../form';

describe('FormComponent', () => {
  it('should be defined', () => {
      // Arrange
      const loginCredentials = new LoginCredentials();
      loginCredentials.login = 'admin';
      loginCredentials.password = 'test';

      const loginErrors: ILoginErrors = {
        login: new FieldValidationResult(),
        password: new FieldValidationResult(),
      };

      const onChangeSpy = sinon.spy();
      const onClickSpy = sinon.spy();

      // Act
      const loginFormComponent = shallow(
        <FormComponent
          loginCredentials={loginCredentials}
          loginErrors={loginErrors}
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

      const loginErrors: ILoginErrors = {
        login: new FieldValidationResult(),
        password: new FieldValidationResult(),
      };

      const onChangeSpy = sinon.spy();
      const onClickSpy = sinon.spy();

      const expectedEmailInput = `
        <div class="form-group clearfix">
          <label for="login">E-mail</label>
          <div>
            <input type="text" name="login" class="form-control" placeholder="E-mail" value="admin"/>
          </div>
          <div class="help-block">
          </div>
        </div>
      `;

      const expectedPasswordInput = `
        <div class="form-group clearfix">
          <label for="password">Password</label>
          <div>
            <input type="password" name="password" class="form-control" placeholder="Password" value="test"/>
          </div>
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
          loginErrors={loginErrors}
          loginRequest={onClickSpy}
          updateLoginInfo={onChangeSpy}
        />,
      );

      // Assert
      expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });

  it('should renders login errors', () => {
      // Arrange
      const loginCredentials = new LoginCredentials();
      loginCredentials.login = 'admin';
      loginCredentials.password = 'test';

      const failedValidationResult = new FieldValidationResult();
      failedValidationResult.succeeded = false;
      failedValidationResult.errorMessage = 'Test error message';

      const loginErrors: ILoginErrors = {
        login: failedValidationResult,
        password: new FieldValidationResult(),
      };

      const onChangeSpy = sinon.spy();
      const onClickSpy = sinon.spy();

      const expectedEmailInput = `
        <div class="form-group clearfix has-error">
          <label for="login">E-mail</label>
          <div>
            <input type="text" name="login" class="form-control" placeholder="E-mail" value="admin"/>
          </div>
          <div class="help-block">
            ${failedValidationResult.errorMessage}
          </div>
        </div>
      `;

      const expectedPasswordInput = `
        <div class="form-group clearfix">
          <label for="password">Password</label>
          <div>
            <input type="password" name="password" class="form-control" placeholder="Password" value="test"/>
          </div>
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
          loginErrors={loginErrors}
          loginRequest={onClickSpy}
          updateLoginInfo={onChangeSpy}
        />,
      );

      // Assert
      expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });
});
