import * as React from 'react';
import { shallow } from 'enzyme';
import {FieldValidationResult} from 'lc-form-validation';
import { multilineTrim } from '../../../../../../common/parse/multilineTrim';
import { LoginCredentials } from '../../../../../../model/login/loginCredentials';
import {ILoginErrors} from '../../../../../../model/login/loginErrors';
import { LoginFormComponent } from '../loginForm';

describe('LoginFormComponent', () => {
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
    const component = shallow(
      <LoginFormComponent
        loginCredentials={loginCredentials}
        loginErrors={loginErrors}
        loginRequest={onClickSpy}
        updateLoginInfo={onChangeSpy}
      />,
    );

    // Assert
    expect(component).not.to.be.undefined;
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

    const expectedHeader = `
      <div class="panel-heading">
        <h3 class="panel-title">
          <p>Please sign in</p>
          <p>(login: admin | trainer | student / pwd: test)</p>
        </h3>
      </div>
    `;

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
    const expectedForm = `
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

    const expectedComponent = `
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default form-container">
              ${expectedHeader}
              ${expectedForm}
            </div>
          </div>
        </div>
      </div>
    `;

    // Act
    const component = shallow(
      <LoginFormComponent
        loginCredentials={loginCredentials}
        loginErrors={loginErrors}
        loginRequest={onClickSpy}
        updateLoginInfo={onChangeSpy}
      />,
    );

    // Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });

  it('calls to updateLoginInfo', () => {
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
    const component = shallow(
      <LoginFormComponent
        loginCredentials={loginCredentials}
        loginErrors={loginErrors}
        loginRequest={onClickSpy}
        updateLoginInfo={onChangeSpy}
      />,
    );

    component.find('div.panel').childAt(1).prop('updateLoginInfo')();

    // Assert
    expect(onChangeSpy.called).to.be.true;
  });

  it('calls to loginRequest', () => {
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
    const component = shallow(
      <LoginFormComponent
        loginCredentials={loginCredentials}
        loginErrors={loginErrors}
        loginRequest={onClickSpy}
        updateLoginInfo={onChangeSpy}
      />,
    );

    component.find('div.panel').childAt(1).prop('loginRequest')();

    // Assert
    expect(onClickSpy.called).to.be.true;
  });
});
