import { navigationHelper } from '../../helper/navigateBasedOnRole';
import { LoginApi } from './../../../../../rest-api/login';
import { LoginCredentials } from './../../../../../model/loginCredentials';
import { loginRequestStarted } from './../loginRequest';
import { UserProfile } from './../../../../../model/userProfile';
import { LoginResponse } from './../../../../../model/loginResponse';
import { loginActionEnums } from './../../../../../common/actionEnums/login';
import { loginRequestCompleted } from '../loginRequest';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [ ReduxThunk ];
const mockStore = configureStore(middlewares);

describe('loginRequestCompleted', () => {
  it('is defined', () => {
    expect(loginRequestCompleted).not.to.be.undefined;
  });

  it('contains the expected type LOGIN_REQUEST', () => {
    // Act
    const actionResult = loginRequestCompleted(null);

    // Assert
    expect(actionResult.type).to.equals(loginActionEnums.LOGIN_REQUEST);
  });

  it('contains the expected payload including the login response', () => {
    // Arrange
    const loginResponse: LoginResponse = {
      succeded: false,
      userProfile: new UserProfile(),
    };

    // Act
    const actionResult = loginRequestCompleted(loginResponse);

    // Assert
    expect(actionResult.payload).not.to.be.undefined;
    expect(actionResult.payload).to.equal(loginResponse);
  });
});

describe('loginRequestStarted', () => {
  it('should be defined', () => {
    // Assert
    expect(loginRequestStarted).not.to.be.undefined;
  });

  it('should return request action type completed', () => {
    // Arrange
    const loginCredentials: LoginCredentials = {
      login: 'admin',
      password: 'test',
    };

    // Act
    const store = mockStore([]);
    store.dispatch(loginRequestStarted(loginCredentials))
      .then(() => {
          // Assert
          expect(store.getActions()[0].type).to.equal(loginActionEnums.LOGIN_REQUEST);
      });
  });

  it('should return expected login Response', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const loginCredentials: LoginCredentials = {
      login: 'admin',
      password: 'test',
    };

    const loginStub = sinon.stub(LoginApi, 'login');

    loginStub.returns({
      then: (callback) => {
        callback(loginCredentials);
      },
    });

    // Act
    const store = mockStore([]);
    store.dispatch(loginRequestStarted(loginCredentials))
      .then(() => {
          // Assert
          expect(store.getActions()[0].payload).to.be.equal(loginCredentials);
          expect(loginStub.called).to.be.true;
      });
  }).bind(this));

  it('should called navigateToHomeBasedOnRole when login response equals true', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const loginCredentials: LoginCredentials = {
      login: 'admin',
      password: 'test',
    };

    const userProfile = new UserProfile();
    userProfile.role = 'test';

    const loginResponse: LoginResponse = {
      succeded: true,
      userProfile,
    };

    const navigateToHomeBasedOnRoleStub = sinon.stub(navigationHelper, 'navigateToHomeBasedOnRole');

    navigateToHomeBasedOnRoleStub.returns({
      then: (callback) => {
        callback(loginResponse.userProfile.role);
      },
    });

    // Act
    const store = mockStore([]);
    store.dispatch(loginRequestStarted(loginCredentials))
      .then(() => {
          // Assert
          expect(navigateToHomeBasedOnRoleStub.called).to.be.true;
          expect(navigateToHomeBasedOnRoleStub.calledWith('/test')).to.be.true;
      });
  }).bind(this));
});
