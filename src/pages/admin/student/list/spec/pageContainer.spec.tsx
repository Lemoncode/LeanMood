import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as summaryStudentListRequest from '../actions/summaryStudentListRequest';
import { StudentSummary } from '../../../../../model/student/studentSummary';
import { ListStudentPage } from '../page';
import { ListStudentPageContainer } from '../pageContainer';

const createStore = configureStore();

describe('pageContainer', () => {
  it('Should be defined', sinon.test(() => {
    const sinon: sinon.SinonStatic = this;

    const mockStore = createStore({
      adminStudent: {
        studentSummaryList: [
          {
            email: 'test@test.com',
            fullname: 'John Doe',
            id: 2,
          },
          {
            email: 'mark@test.com',
            fullname: 'Mark Somez',
            id: 3,
          },
        ],
      },
    });

    const summaryStudentListRequestStartedMock =
              sinon.stub(summaryStudentListRequest,
                        'summaryStudentListRequestStarted',
                        () => {
                          return {
                            type: 'dummy',
                          };
                        });

    const nonTypedMockStore: any = mockStore;
    const pageContainer = mount(
      <Provider store={nonTypedMockStore}>
        <ListStudentPageContainer />
      </Provider>,
    );

    expect(pageContainer).not.to.be.undefined;
  }).bind(this));

  it('Should contain a property called StudentList and be informed', sinon.test(() => {
    const sinon: sinon.SinonStatic = this;

    // Arrange
    const mockStore = createStore({
      adminStudent: {
        studentSummaryList: [
          {
            email: 'test@test.com',
            fullname: 'John Doe',
            id: 2,
          },
          {
            email: 'mark@test.com',
            fullname: 'Mark Somez',
            id: 3,
          },
        ],
      },
    });

    const summaryStudentListRequestStartedMock =
              sinon.stub(summaryStudentListRequest,
                        'summaryStudentListRequestStarted',
                        () => {
                          return {
                            type: 'dummy',
                          };
                        });

    // Act
    const nonTypedMockStore: any = mockStore;
    const pageContainer = mount(
      <Provider store={nonTypedMockStore}>
        <ListStudentPageContainer />
      </Provider>,
    );

    // Assert
    // ListStudentPage
    const pagePresentationalWrapper = pageContainer.find('ListStudentPage');
    expect(pagePresentationalWrapper).not.to.be.undefined;
    expect(pagePresentationalWrapper.prop('fetchStudents')).not.to.be.undefined;
    expect(pagePresentationalWrapper.prop('studentList')).not.to.be.undefined;
    expect(pagePresentationalWrapper.prop<StudentSummary[]>('studentList').length).equals(2);
    expect(pagePresentationalWrapper.prop('studentList')[0].fullname).equals('John Doe');
    expect(pagePresentationalWrapper.prop('studentList')[1].fullname).equals('Mark Somez');
  }).bind(this));

});
