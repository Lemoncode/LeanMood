import { FieldValidationResult } from 'lc-form-validation';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { LoginCredentials } from '../../../../../model/login/loginCredentials';
import { loginActionEnums } from '../../../../../common/actionEnums/login';
import { loginFormValidation } from '../../components/loginForm/login.validation';
import {
  loginContentChangedStartedAction,
  loginContentChangedCompletedAction,
} from './../loginContentChanged';

const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

describe('loginContentChangedStartedAction', () => {
  it('should be a function', () => {
    expect(loginContentChangedStartedAction).to.be.a('function');
  });

  it('should calls to validateField', sinon.test((done) => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const viewModel = new LoginCredentials();
    const fieldName = 'test fieldName';
    const value = 'test value';

    const expectedValidationResult = new FieldValidationResult();
    const validateFieldStub = sinon.stub(loginFormValidation,
      'validateField', () => {
        return {
          then: (callback) => {
            callback(expectedValidationResult);
          },
        };
      },
    );

    // Act
    const store = mockStore([]);

    store.dispatch(loginContentChangedStartedAction(viewModel, fieldName, value))
      .then(() => {
        // Assert
        expect(validateFieldStub.calledWith(viewModel, fieldName, value)).to.be.true;
        expect(store.getActions()[0].type).to.equal(loginActionEnums.LOGIN_CONTENT_CHANGED);
        expect(store.getActions()[0].payload.fieldName).to.equal(fieldName);
        expect(store.getActions()[0].payload.value).to.equal(value);
        expect(store.getActions()[0].payload.fieldValidationResult).to.equal(expectedValidationResult);
        done();
      });
  }).bind(this));
});

describe('loginContentChangedCompletedAction', () => {
  it('is defined', () => {
    // Assert
    expect(loginContentChangedCompletedAction).not.to.be.undefined;
  });

  it('contains the expected type LOGIN_CONTENT_CHANGED', () => {
    // Act
    const actionResult = loginContentChangedCompletedAction(null, null, null);

    // Assert
    expect(actionResult.type).to.be.equals(loginActionEnums.LOGIN_CONTENT_CHANGED);
  });

  it('contains the expected payload', () => {
    // Arrange
    const fieldName = 'test fieldName';
    const value = 'test value';
    const fieldValidationResult = new FieldValidationResult();

    // Act
    const actionResult = loginContentChangedCompletedAction(fieldName, value, fieldValidationResult);

    // Assert
    expect(actionResult.payload.fieldName).to.be.equal(fieldName);
    expect(actionResult.payload.value).to.be.equal(value);
    expect(actionResult.payload.fieldValidationResult).to.be.equal(fieldValidationResult);
  });
});
