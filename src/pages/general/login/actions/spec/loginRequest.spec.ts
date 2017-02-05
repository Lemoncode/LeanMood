import { navigationHelper } from '../../../../../common/helper/navigationHelper';
import { loginApi } from '../../../../../rest-api/login/loginAPI';
import { LoginCredentials } from './../../../../../model/loginCredentials';
import { UserProfile } from './../../../../../model/userProfile';
import { LoginResponse } from './../../../../../model/loginResponse';
import { loginActionEnums } from './../../../../../common/actionEnums/login';
import { loginRequestStartedAction, loginRequestCompletedAction } from '../loginRequest';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [ ReduxThunk ];
const mockStore = configureStore(middlewares);

describe('loginRequestCompleted', () => {
  it('is defined', () => {
    expect(loginRequestCompletedAction).not.to.be.undefined;
  });

  it('contains the expected type LOGIN_REQUEST', () => {
    // Act
    const actionResult = loginRequestCompletedAction(null);

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
    const actionResult = loginRequestCompletedAction(loginResponse);

    // Assert
    expect(actionResult.payload).not.to.be.undefined;
    expect(actionResult.payload).to.equal(loginResponse);
  });
});

describe('loginRequestStarted', () => {
  it('should be defined', () => {
    // Assert
    expect(loginRequestStartedAction).not.to.be.undefined;
  });

  it('should return request action type completed', (done) => {
    // Arrange
    const loginCredentials: LoginCredentials = {
      login: 'admin',
      password: 'test',
    };

    // Act
    const store = mockStore([]);
    store.dispatch(loginRequestStartedAction(loginCredentials))
      .then(() => {
          // Assert
          expect(store.getActions()[0].type).to.equal(loginActionEnums.LOGIN_REQUEST);
          done();
      });
  });

  it('should return expected login Response', sinon.test((done) => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const loginCredentials: LoginCredentials = {
      login: 'admin',
      password: 'test',
    };

    const loginStub = sinon.stub(loginApi, 'login');

    loginStub.returns({
      then: (callback) => {
        callback(loginCredentials);
      },
    });

    // Act
    const store = mockStore([]);
    store.dispatch(loginRequestStartedAction(loginCredentials))
      .then(() => {
          // Assert
          expect(store.getActions()[0].payload).to.be.equal(loginCredentials);
          expect(loginStub.called).to.be.true;
          done();
      });
  }).bind(this));

  it('should called navigateToPath when login response equals true', sinon.test((done) => {
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

    const loginStub = sinon.stub(loginApi, 'login');
    loginStub.returns({
      then: (callback) => {
        callback(loginResponse);
      },
    });

    const navigateToHomeBasedOnRoleStub = sinon.stub(navigationHelper, 'navigateToPath');

    navigateToHomeBasedOnRoleStub.returns({
      then: (callback) => {
        callback(loginResponse.userProfile.role);
      },
    });

    // Act
    const store = mockStore([]);
    store.dispatch(loginRequestStartedAction(loginCredentials))
      .then(() => {
          // Assert
          expect(navigateToHomeBasedOnRoleStub.called).to.be.true;
          expect(navigateToHomeBasedOnRoleStub.calledWith('/test')).to.be.true;
          done();
      });
  }).bind(this));
});
