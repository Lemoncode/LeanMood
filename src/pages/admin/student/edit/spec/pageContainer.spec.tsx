import { expect } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as studentFetchRequest from '../actions/studentFetchRequest';
import { EditStudentPage } from '../page';
import { EditStudentPageContainer } from '../pageContainer';

const createStore = configureStore();

describe('pageContainer', () => {
  let mockStore = null;

  beforeEach(() => {
    mockStore = createStore({
      adminStudent: {
        editingStudent: {
          email: 'test@test.com',
          fullname: 'John Doe',
          phoneNumber: '999-999',
          isActive: true,
          id: 2,
        },
        editingStudentErrors: {
          fullname: { errorMessage: ''},
          email: { errorMessage: ''},
        }
      },
    });
  });

  it('Should be defined', sinon.test(() => {
    const sinon: sinon.SinonStatic = this;

    // Arrange
    const editStudentRequestStartedMock =
      sinon.stub(studentFetchRequest,
        'studentFetchRequestStarted',
        () => {
          return {
            type: 'dummy',
          };
        });

    const nonTypedMockStore: any = mockStore;

    // Act
    const pageContainer = mount(
      <Provider store={nonTypedMockStore}>
        <EditStudentPageContainer params={{ studentId: ''}} />
      </Provider>,
    );

    // Assert
    expect(pageContainer).not.to.be.undefined;
  }).bind(this));

  it('Should contain a property editStudentId equal to 10 whne params is 10', sinon.test(() => {
    const sinon: sinon.SinonStatic = this;

    // Arrange
    const studentFetchRequestStartedMock =
      sinon.stub(studentFetchRequest,
        'studentFetchRequestStarted',
        () => {
          return {
            type: 'dummy',
          };
        });

    // Act
    const nonTypedMockStore: any = mockStore;
    const pageContainer = mount(
      <Provider store={nonTypedMockStore}>
        <EditStudentPageContainer params={{ studentId: '10'}} />
      </Provider>,
    );

    // Assert
    const pagePresentationalWrapper = pageContainer.find('EditStudentPage');
    expect(pagePresentationalWrapper).not.to.be.undefined;
    expect(pagePresentationalWrapper.prop('studentId')).to.equal(10);

  }).bind(this));

  it('Should calls to fetchStudent with expected studentId', sinon.test(() => {
    const sinon: sinon.SinonStatic = this;

    // Arrange
    const studentFetchRequestStartedMock =
      sinon.stub(studentFetchRequest,
        'studentFetchRequestStarted',
        () => {
          return {
            type: 'dummy',
          };
        });

    // Act
    const nonTypedMockStore: any = mockStore;
    const pageContainer = mount(
      <Provider store={nonTypedMockStore}>
        <EditStudentPageContainer params={{ studentId: '10'}} />
      </Provider>,
    );

    // Assert
    expect(studentFetchRequestStartedMock.calledOnce).to.be.true;
    expect(studentFetchRequestStartedMock.calledWith(10)).to.be.true;
  }).bind(this));
});
