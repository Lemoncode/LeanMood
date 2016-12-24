import { expect } from 'chai';
import {} from 'mocha'
import {} from 'core-js'
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store'

import {adminActionEnums} from '../../../../../../common/actionEnums/admin'
import { summaryStudentListRequestStarted, summaryStudentListRequestCompleted } from '../summaryStudentListRequest'
import { StudentSummary} from '../../../../../../model/studentSummary'
import { studentApi } from '../../../../../../rest-api'

const middlewares = [ ReduxThunk ];
const mockStore = configureStore(middlewares);


describe('summaryStudentListRequestCompleted', () => {
  it('is defined', () => {
    // Assert
    expect(summaryStudentListRequestCompleted).not.to.be.undefined;
  });

  it('contains the expected type GET_SUMMARY_STUDENT_REQUEST_COMPLETED', () => {
    // Assert
    expect(summaryStudentListRequestCompleted([]).type).to.be.equals(adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED);
  });

  it('contains the expected payload including the student summary list', () => {
    // Arrange
    const students : StudentSummary[] = [
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
    ];

    // Act
    const actionResult = summaryStudentListRequestCompleted(students);

    // Assert
    expect(actionResult.payload).not.to.be.undefined;
    expect(actionResult.payload.length).equal(2);
    expect(actionResult.payload).eql(students);
  });
})

describe('summaryStudentListRequestStarted', () => {
  it('should be defined', () => {
    // Assert
    expect(summaryStudentListRequestStarted).not.to.be.undefined;
  });

  it('should return request action type completed', sinon.test((done) => {
    // Arrange
    const sinon : sinon.SinonStatic = this;

    // Act
    const store = mockStore([]);
    store.dispatch(summaryStudentListRequestStarted())
      .then(() => {
          // Assert
          expect(store.getActions()[0].type).to.be.equal(adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED);
          done();
      });
  }).bind(this));

  it('should return expected student summary data', sinon.test((done) => {
    // Arrange
    const sinon : sinon.SinonStatic = this;

    const students : StudentSummary[] = [
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
    ];

    const getSummaryStudentListStub = sinon.stub(studentApi, 'getSummaryStudentList');

    getSummaryStudentListStub.returns({
      then: callback => {
        callback(students);
      }
    });

    
    // Act
    const store = mockStore([]);
    store.dispatch(summaryStudentListRequestStarted())
      .then(() => {
          // Assert
          expect(store.getActions()[0].payload).to.be.equal(students);
          expect(getSummaryStudentListStub.called).to.be.true;
          done();
      });
  }).bind(this));


});
