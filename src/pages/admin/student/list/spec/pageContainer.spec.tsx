import { expect } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ListStudentPageContainer } from '../pageContainer'
import { ListStudentPage } from '../page'
import * as summaryStudentListRequest  from '../actions/summaryStudentListRequest'
// { summaryStudentListRequestStarted }

const createStore = configureStore();

describe('pageContainer', () => {
  it('Should be defined', sinon.test(() => {
    let sinon: sinon.SinonStatic = this;

    let mockStore = createStore({
      adminStudent: {
        studentSummaryList: [
          {
            id: 2,
            fullname: 'John Doe',
            email: 'test@test.com'
          },
          {
            id: 3,
            fullname: 'Mark Somez',
            email: 'mark@test.com'
          }
        ]
      }
    });

    const summaryStudentListRequestStartedMock =
              sinon.stub(summaryStudentListRequest,
                        'summaryStudentListRequestStarted',
                        () => {
                          return {
                            type: 'dummy'
                          }
                        });

    const nonTypedMockStore : any = mockStore;
    const pageContainer = mount(
                            <Provider store={nonTypedMockStore}>
                              <ListStudentPageContainer/>
                            </Provider>
                          );

    expect(pageContainer).not.to.be.undefined;
  }).bind(this));

  it('Should contain a property called StudentList and be informed', sinon.test(() => {
    let sinon: sinon.SinonStatic = this;

    // Arrange
    let mockStore = createStore({
      adminStudent: {
        studentSummaryList: [
          {
            id: 2,
            fullname: 'John Doe',
            email: 'test@test.com'
          },
          {
            id: 3,
            fullname: 'Mark Somez',
            email: 'mark@test.com'
          }
        ]
      }
    });

    const summaryStudentListRequestStartedMock =
              sinon.stub(summaryStudentListRequest,
                        'summaryStudentListRequestStarted',
                        () => {
                          return {
                            type: 'dummy'
                          }
                        });

    // Act
    const nonTypedMockStore : any = mockStore;
    const pageContainer = mount(
                            <Provider store={nonTypedMockStore}>
                              <ListStudentPageContainer/>
                            </Provider>
                          );

    // Assert
    //ListStudentPage
    const pagePresentationalWrapper = pageContainer.find('ListStudentPage');
    expect(pagePresentationalWrapper).not.to.be.undefined;
    expect(pagePresentationalWrapper.prop('fetchStudents')).not.to.be.undefined;
    expect(pagePresentationalWrapper.prop('studentList')).not.to.be.undefined;
    expect(pagePresentationalWrapper.prop('studentList').length).equals(2);
    expect(pagePresentationalWrapper.prop('studentList')[0].fullname).equals('John Doe');
    expect(pagePresentationalWrapper.prop('studentList')[1].fullname).equals('Mark Somez');
  }).bind(this));

});
