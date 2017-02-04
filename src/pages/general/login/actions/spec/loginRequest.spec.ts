import { navigationHelper } from '../../helper/navigateBasedOnRole';
import { LoginApi } from './../../../../../rest-api/login';
import { LoginCredentials } from './../../../../../model/loginCredentials';
import { loginRequestStarted } from './../loginRequest';
import { UserProfile } from './../../../../../model/userProfile';
import { LoginResponse } from './../../../../../model/loginResponse';
import { loginActionEnums } from './../../../../../common/actionEnums/login';
import { loginRequestCompleted } from '../loginRequest';
import { expect } from 'chai';
import {} from 'mocha';
import {} from 'core-js';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [ ReduxThunk ];
const mockStore = configureStore(middlewares);

describe('loginRequestCompleted', () => {
  it('is defined', () => {
    expect(loginRequestCompleted).not.to.be.undefined;
  });

  it('contains the expected type USERPROFILE_PERFORM_LOGIN', () => {
    // Assert
    expect(loginRequestCompleted(new LoginResponse).type).to.be.equals(loginActionEnums.USERPROFILE_PERFORM_LOGIN);
  });

  it('contains the expected payload including the login response', () => {
    // Arrange
    const loginResponse : LoginResponse =
    {
      succeded: false,
      userProfile: new UserProfile()
    };

    // Act
    const actionResult = loginRequestCompleted(loginResponse);

    // Assert
    expect(actionResult.payload).not.to.be.undefined;
    expect(actionResult.payload).to.be.equal(loginResponse);
  });
})

describe('loginRequestStarted', () => {
  it('should be defined', () => {
    //Assert
    expect(loginRequestStarted).not.to.be.undefined;
  });

  it('should return request action type completed', sinon.test((done) => {
    // Arrange
    const sinon : sinon.SinonStatic = this;
    const loginCredentials : LoginCredentials =
    {
      login: 'admin',
      password: 'test'
    };

    // Act
    const store = mockStore([]);
    store.dispatch(loginRequestStarted(loginCredentials))
      .then(() => {
          // Assert
          expect(store.getActions()[0].type).to.be.equal(loginActionEnums.USERPROFILE_PERFORM_LOGIN);
          done();
      });
  }).bind(this));

  it('should return request action type completed', sinon.test((done) => {
    // Arrange
    const sinon : sinon.SinonStatic = this;
    const loginCredentials : LoginCredentials =
    {
      login: 'admin',
      password: 'test'
    };

    // Act
    const store = mockStore([]);
    store.dispatch(loginRequestStarted(loginCredentials))
      .then(() => {
          // Assert
          expect(store.getActions()[0].type).to.be.equal(loginActionEnums.USERPROFILE_PERFORM_LOGIN);
          done();
      });
  }).bind(this));

  it('should return expected login Response', sinon.test((done) => {
    // Arrange
    const sinon : sinon.SinonStatic = this;

    const loginCredentials : LoginCredentials =
    {
      login: 'admin',
      password: 'test'
    };

    const loginStub = sinon.stub(LoginApi, 'login');

    loginStub.returns({
      then: callback => {
        callback(loginCredentials);
      }
    });


    // Act
    const store = mockStore([]);
    store.dispatch(loginRequestStarted(loginCredentials))
      .then(() => {
          // Assert
          expect(store.getActions()[0].payload).to.be.equal(loginCredentials);
          expect(loginStub.called).to.be.true;
          done();
      });
  }).bind(this));

  it('should called navigateToHomeBasedOnRole', sinon.test((done) => {
    // Arrange
    const sinon : sinon.SinonStatic = this;

    const loginCredentials : LoginCredentials =
    {
      login: 'admin',
      password: 'test'
    };

    const loginResponse : LoginResponse =
    {
      succeded: true,
      userProfile: new UserProfile()
    }

    const navigateToHomeBasedOnRoleStub = sinon.stub(navigationHelper, 'navigateToHomeBasedOnRole');

    navigateToHomeBasedOnRoleStub.returns({
      then: callback => {
        callback(loginResponse.userProfile.role);
      }
    });


    // Act
    const store = mockStore([]);
    store.dispatch(loginRequestStarted(loginCredentials))
      .then(() => {
          // Assert
          expect(navigateToHomeBasedOnRoleStub.called).to.be.true;
          done();
      });
  }).bind(this));

  it('shouldnt called navigateToHomeBasedOnRole', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const navigateToHomeBasedOnRoleStub = sinon.stub(navigationHelper, 'navigateToHomeBasedOnRole');
    // Act
    // Assert
    expect(navigateToHomeBasedOnRoleStub.called).to.be.false;
  }).bind(this));

})
