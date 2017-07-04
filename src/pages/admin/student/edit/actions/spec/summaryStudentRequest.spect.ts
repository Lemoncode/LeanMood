import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { adminActionEnums } from '../../../../../../common/actionEnums/admin';
import { summaryStudentByIdRequestCompleted, summaryStudentByIdRequestStarted } from '../summaryStudentRequest';
import { StudentSummary } from '../../../../../../model/studentSummary';
import { studentApi } from '../../../../../../rest-api';

const mockStore = configureStore([thunk]);

describe('summaryStudentByIdRequestCompleted', () => {
  it('should be an object', () => {
    // Assert
    expect(summaryStudentByIdRequestCompleted).not.to.be.an('object');
  });

  it('contains the expected type GET_SUMMARY_STUDENT_BY_ID_REQUEST_COMPLETED', () => {
    // Arrange
    const student = new StudentSummary();    

    // Act
    const action = summaryStudentByIdRequestCompleted(student);

    // Assert
    expect(action.type).to.be.equals(adminActionEnums.GET_SUMMARY_STUDENT_BY_ID_REQUEST_COMPLETED);
  });

  it('contains the expected payload including the student summary', () => {
    // Arrange     
    const student: StudentSummary = {
        id: 2,
        fullname: 'John Doe',
        email: 'test@test.com',
        isActive: true,
      };
      
    // Act
    const actionResult = summaryStudentByIdRequestCompleted(student);

    // Assert
    expect(actionResult.payload.fullname).to.be.equal(student.fullname);
    expect(actionResult.payload.email).to.be.equal(student.email);
    expect(actionResult.payload.isActive).to.be.equal(student.isActive);
    expect(actionResult.payload).eql(student);
  });
});

describe('summaryStudentByIdRequestStarted', () => {
  it('should return a function', () => {
    // Arrange
    const studentId = 1;

    // Assert
    expect(summaryStudentByIdRequestStarted(studentId)).to.be.a('function');
  });

  it('should return request action type completed', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const studentId = 1;

    // Act
    const store = mockStore([]);
    store.dispatch(summaryStudentByIdRequestStarted(studentId)).then(() => {

      // Assert
      expect(store.getActions()[0].type).to.be.equal(adminActionEnums.GET_SUMMARY_STUDENT_BY_ID_REQUEST_COMPLETED);
      done();
    });
  }));

  it('should return expected student summary data', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const student: StudentSummary = 
      {
        id: 2,
        fullname: 'John Doe',
        email: 'test@test.com',
        isActive: true,
      };

    const getSummaryStudentListStub = sinon.stub(studentApi, 'getStudentById');

    getSummaryStudentListStub.returns({
      then: (callback) => {
        callback(student);
      },
    });

    // Act
    const store = mockStore([]);
    store.dispatch(summaryStudentByIdRequestStarted(student.id)).then(() => {
      // Assert
      expect(store.getActions()[0].payload).to.be.equal(student);
      expect(getSummaryStudentListStub.called).to.be.true;
      done();
    });
  }));
});
