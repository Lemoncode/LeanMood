import * as toastr from 'toastr';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { FormValidationResult, FieldValidationResult } from 'lc-form-validation';
import { navigationHelper } from '../../../../../common/helper/navigationHelper';
import { loginApi } from '../../../../../rest-api/login';
import { LoginCredentials } from '../../../../../model/login/loginCredentials';
import { UserProfile } from './../../../../../model/userProfile';
import { LoginResponse } from '../../../../../model/login/loginResponse';
import { loginActionEnums } from './../../../../../common/actionEnums/login';
import { loginRequestStartedAction, loginErrorMessages } from '../loginRequest';
import { loginFormValidation } from '../../components/loginForm/login.validation';

const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

describe('loginRequestStartedAction', () => {
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

  it('should dispatch LOGIN_REQUEST_SUCCESS with the loginResponse when login is successful',
    sinon.test(function(done) {
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
        type: loginActionEnums.LOGIN_REQUEST_SUCCESS,
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
        expect(toastrErrorStub.calledWithExactly(loginErrorMessages.validation)).to.be.true;
        done();
      }).catch(done);
  }));

  it('should dispatch LOGIN_REQUEST_ERROR with validation errors when validation is not successful',
    sinon.test(function(done) {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const store = mockStore([]);
      const loginCredentials = new LoginCredentials();
      const fieldErrors: FieldValidationResult[] = [
        { ...new FieldValidationResult(), key: 'login' },
        { ...new FieldValidationResult(), key: 'password' },
      ];
      const validationResult = new FormValidationResult();
      validationResult.succeeded = false;
      validationResult.fieldErrors = fieldErrors;
      const validateForm = sinon.stub(loginFormValidation, 'validateForm').returns({
        then: (callback) => {
          callback(validationResult);
        },
      });
      const loginStub = sinon.stub(loginApi, 'login').returns(Promise.resolve());
      const expectedAction = {
        type: loginActionEnums.LOGIN_REQUEST_ERROR,
        payload: fieldErrors,
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
        expect(toastrErrorStub.calledWithExactly(loginErrorMessages.credentials)).to.be.true;
        done();
      }).catch(done);
  }));
});
