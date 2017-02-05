import * as React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as loginContentChanged from '../../../actions/loginContentChanged';
import * as loginRequest from '../../../actions/loginRequest';
import {LoginFormContainerComponent} from '../loginFormContainer';

const createStore = configureStore();

describe('LoginFormContainerComponent', () => {
  it('should be defined', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      login: {
        editingLogin: {},
      },
    });

    const loginContentChangedActionStub = sinon.stub(loginContentChanged,
    'loginContentChangedAction', () => ({ type: 'dummy' }));

    const loginRequestStartedActionStub = sinon.stub(loginRequest,
    'loginRequestStartedAction', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <LoginFormContainerComponent />
      </Provider>,
    );

    // Assert
    expect(container).not.to.be.undefined;
  }).bind(this));

  it('should contain a property called loginCredentials', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      login: {
        editingLogin: {
          login: 'test login',
          password: 'test password',
        },
      },
    });

    const loginContentChangedActionStub = sinon.stub(loginContentChanged,
    'loginContentChangedAction', () => ({ type: 'dummy' }));

    const loginRequestStartedActionStub = sinon.stub(loginRequest,
    'loginRequestStartedAction', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <LoginFormContainerComponent />
      </Provider>,
    );

    // Assert
    const presentational = container.find('div.panel').childAt(1);
    expect(presentational).not.to.be.undefined;
    expect(presentational.prop('loginCredentials').login).to.equal('test login');
    expect(presentational.prop('loginCredentials').password).to.equal('test password');
  }).bind(this));
});