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
        <EditStudentPageContainer />
      </Provider>,
    );

    // Assert
    expect(pageContainer).not.to.be.undefined;
  }).bind(this));

  it('Should contain a property called EditStudent and be informed', sinon.test(() => {
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
        <EditStudentPageContainer />
      </Provider>,
    );

    // Assert
    const pagePresentationalWrapper = pageContainer.find('EditStudentPage');
    expect(pagePresentationalWrapper).not.to.be.undefined;
    expect(pagePresentationalWrapper.prop('student')).not.to.be.undefined;
    expect(pagePresentationalWrapper.prop('student').fullname).equals('John Doe');
  }).bind(this));
});
