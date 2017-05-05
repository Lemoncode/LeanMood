import * as toastr from 'toastr';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { FormValidationResult } from 'lc-form-validation';
import { navigationHelper } from '../../../../../common/helper/navigationHelper';
import { loginApi } from '../../../../../rest-api/login/loginAPI';
import { LoginCredentials } from '../../../../../model/login/loginCredentials';
import { UserProfile } from './../../../../../model/userProfile';
import { LoginResponse } from '../../../../../model/login/loginResponse';
import { loginActionEnums } from './../../../../../common/actionEnums/login';
import { loginRequestStartedAction, loginRequestCompletedAction } from '../loginRequest';
import { loginFormValidation } from '../../components/loginForm/login.validation';

const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

describe('loginRequestCompleted', () => {
  it('should be an object', () => {
    expect(loginRequestCompletedAction).not.to.be.an('object').not.null;
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

describe.only('loginRequestStarted', () => {
  it('should be a function', () => {
    // Assert
    expect(loginRequestStartedAction).to.be.a('function');
  });

  it('should call toast.remove to clear previous popups', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const store = mockStore([]);
    const loginCredentials = new LoginCredentials();
    const toastrRemoveStub = sinon.stub(toastr, 'remove');
    const validateForm = sinon.stub(loginFormValidation, 'validateForm').returns(Promise.resolve());
    const loginStub = sinon.stub(loginApi, 'login');

    // Act
    store.dispatch(loginRequestStartedAction(loginCredentials))
      .then(() => {
        // Assert
        expect(toastrRemoveStub.calledOnce).to.be.true;
        done();
      }).catch(done);
  }));

  it('should call loginFormValidation "validateForm" method to validate credentials', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const store = mockStore([]);
    const loginCredentials = new LoginCredentials();
    const validationResult = new FormValidationResult();
    const validateForm = sinon.stub(loginFormValidation, 'validateForm').returns({
      then: (callback) => {
        callback(validationResult);
      },
    });
    const loginStub = sinon.stub(loginApi, 'login');

    // Act
    store.dispatch(loginRequestStartedAction(loginCredentials))
      .then(() => {
        // Assert
        expect(validateForm.calledWithExactly(loginCredentials)).to.be.true;
        done();
      }).catch(done);
  }));

  it('should call loginApi.login when validation is succeeded', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const store = mockStore([]);
    const loginCredentials = new LoginCredentials();
    const validationResult = new FormValidationResult();
    validationResult.succeeded = true;
    const validateForm = sinon.stub(loginFormValidation, 'validateForm').returns({
      then: (callback) => {
        callback(validationResult);
      },
    });
    const loginStub = sinon.stub(loginApi, 'login').returns(Promise.resolve());

    // Act
    store.dispatch(loginRequestStartedAction(loginCredentials))
      .then(() => {
        // Assert
        expect(loginStub.called).to.be.true;
        done();
      }).catch(done);
  }));

  it('should dispatch LOGIN_REQUEST with the loginResponse when login is successful', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const store = mockStore([]);
    const loginCredentials = new LoginCredentials();
    const validationResult = new FormValidationResult();
    validationResult.succeeded = true;
    const validateForm = sinon.stub(loginFormValidation, 'validateForm').returns({
      then: (callback) => {
        callback(validationResult);
      },
    });
    const loginResponse = new LoginResponse();
    loginResponse.succeded = true;
    const loginStub = sinon.stub(loginApi, 'login').returns({
      then: (callback) => {
        callback(loginResponse);
      },
    });
    const expectedAction = {
      type: loginActionEnums.LOGIN_REQUEST,
      payload: loginResponse,
    };

    // Act
    store.dispatch(loginRequestStartedAction(loginCredentials))
      .then(() => {
        // Assert
        const [action] = store.getActions();
        expect(action).to.be.deep.equals(expectedAction);
        done();
      }).catch(done);
  }));

  it('should call navigationHelper with the loginResponse when login is successful', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const store = mockStore([]);
    const loginCredentials = new LoginCredentials();
    const validationResult = new FormValidationResult();
    validationResult.succeeded = true;
    const validateForm = sinon.stub(loginFormValidation, 'validateForm').returns({
      then: (callback) => {
        callback(validationResult);
      },
    });
    const loginResponse = new LoginResponse();
    loginResponse.succeded = true;
    loginResponse.userProfile.role = 'test';
    const loginStub = sinon.stub(loginApi, 'login').returns({
      then: (callback) => {
        callback(loginResponse);
      },
    });

    const navigateToPath = sinon.stub(navigationHelper, 'navigateToPath');
    navigateToPath.returns({
      then: (callback) => {
        callback(loginResponse.userProfile.role);
      },
    });

    // Act
    store.dispatch(loginRequestStartedAction(loginCredentials))
      .then(() => {
        // Assert
        expect(navigateToPath.calledWithExactly('/test')).to.be.true;
        done();
      }).catch(done);
  }));

  it('should call toast.error when validation is not successful', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const store = mockStore([]);
    const loginCredentials = new LoginCredentials();
    const validationResult = new FormValidationResult();
    validationResult.succeeded = false;
    const validateFormStub = sinon.stub(loginFormValidation, 'validateForm').returns({
      then: (callback) => {
        callback(validationResult);
      },
    });
    const loginStub = sinon.stub(loginApi, 'login').returns(Promise.resolve());
    const toastrErrorStub = sinon.stub(toastr, 'error');

    // Act
    store.dispatch(loginRequestStartedAction(loginCredentials))
      .then(() => {
        // Assert
        expect(toastrErrorStub.called).to.be.true;
        done();
      }).catch(done);
  }));

  it('should not call toast.error when validation is successful', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const store = mockStore([]);
    const loginCredentials = new LoginCredentials();
    const validationResult = new FormValidationResult();
    validationResult.succeeded = true;
    const validateForm = sinon.stub(loginFormValidation, 'validateForm').returns({
      then: (callback) => {
        callback(validationResult);
      },
    });
    const loginStub = sinon.stub(loginApi, 'login').returns(Promise.resolve());
    const toastrErrorStub = sinon.stub(toastr, 'error');

    // Act
    store.dispatch(loginRequestStartedAction(loginCredentials))
      .then(() => {
        // Assert
        expect(toastrErrorStub.called).to.be.false;
        done();
      }).catch(done);
  }));

  it('should not call toast.error when login is successful', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const store = mockStore([]);
    const loginCredentials = new LoginCredentials();
    const validationResult = new FormValidationResult();
    validationResult.succeeded = true;
    const validateForm = sinon.stub(loginFormValidation, 'validateForm').returns({
      then: (callback) => {
        callback(validationResult);
      },
    });
    const loginResponse = new LoginResponse();
    loginResponse.succeded = true;
    const loginStub = sinon.stub(loginApi, 'login').returns({
      then: (callback) => {
        callback(loginResponse);
      },
    });
    const toastrErrorStub = sinon.stub(toastr, 'error');

    // Act
    store.dispatch(loginRequestStartedAction(loginCredentials))
      .then(() => {
        // Assert
        expect(toastrErrorStub.called).to.be.false;
        done();
      }).catch(done);
  }));

  it('should call toast.error when login is not successful', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const store = mockStore([]);
    const loginCredentials = new LoginCredentials();
    const validationResult = new FormValidationResult();
    validationResult.succeeded = true;
    const validateForm = sinon.stub(loginFormValidation, 'validateForm').returns({
      then: (callback) => {
        callback(validationResult);
      },
    });
    const loginResponse = new LoginResponse();
    loginResponse.succeded = false;
    const loginStub = sinon.stub(loginApi, 'login').returns({
      then: (callback) => {
        callback(loginResponse);
      },
    });
    const toastrErrorStub = sinon.stub(toastr, 'error');

    // Act
    store.dispatch(loginRequestStartedAction(loginCredentials))
      .then(() => {
        // Assert
        expect(toastrErrorStub.called).to.be.true;
        done();
      }).catch(done);
  }));
});
