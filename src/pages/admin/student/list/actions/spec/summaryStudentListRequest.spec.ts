import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { adminActionEnums } from '../../../../../../common/actionEnums/admin';
import { summaryStudentListRequestStarted, summaryStudentListRequestCompleted } from '../summaryStudentListRequest';
import { StudentSummary } from '../../../../../../model/studentSummary';
import { studentAPI } from '../../../../../../rest-api';

const mockStore = configureStore([thunk]);

describe('summaryStudentListRequestCompleted', () => {
  it('should be an object', () => {
    // Assert
    expect(summaryStudentListRequestCompleted).not.to.be.an('object');
  });

  it('contains the expected type GET_SUMMARY_STUDENT_REQUEST_COMPLETED', () => {
    // Act
    const action = summaryStudentListRequestCompleted([]);

    // Assert
    expect(action.type).to.be.equals(adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED);
  });

  it('contains the expected payload including the student summary list', () => {
    // Arrange
    const students: StudentSummary[] = [
      {
        id: '2',
        fullname: 'John Doe',
        email: 'test@test.com',
        isActive: true,
      },
      {
        id: '3',
        fullname: 'Mark Somez',
        email: 'mark@test.com',
        isActive: true,
      },
    ];

    // Act
    const actionResult = summaryStudentListRequestCompleted(students);

    // Assert
    expect(actionResult.payload).to.be.an('array');
    expect(actionResult.payload.length).equal(2);
    expect(actionResult.payload).eql(students);
  });
});

describe('summaryStudentListRequestStarted', () => {
  it('should return a function', () => {
    // Assert
    expect(summaryStudentListRequestStarted()).to.be.a('function');
  });

  it('should return request action type completed', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    // Act
    const store = mockStore([]);
    store.dispatch(summaryStudentListRequestStarted()).then(() => {
      // Assert
      expect(store.getActions()[0].type).to.be.equal(adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED);
      done();
    });
  }));

  it('should return expected student summary data', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const students: StudentSummary[] = [
      {
        id: '2',
        fullname: 'John Doe',
        email: 'test@test.com',
        isActive: true,
      },
      {
        id: '3',
        fullname: 'Mark Somez',
        email: 'mark@test.com',
        isActive: true,
      },
    ];

    const getStudentSummaryListStub = sinon.stub(studentAPI, 'getStudentSummaryList');

    getStudentSummaryListStub.returns({
      then: (callback) => {
        callback(students);
      },
    });

    // Act
    const store = mockStore([]);
    store.dispatch(summaryStudentListRequestStarted()).then(() => {
      // Assert
      expect(store.getActions()[0].payload).to.be.equal(students);
      expect(getStudentSummaryListStub.called).to.be.true;
      done();
    });
  }));
});
