import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { adminActionEnums } from '../../../../../../common/actionEnums/admin';
import { studentFetchRequestStarted, studentFetchRequestCompleted } from '../studentFetchRequest';
import { Student } from '../../../../../../model/student/student';
import { studentApi } from '../../../../../../rest-api';

const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

describe('studentFechRequestCompleted', () => {
  it('is defined', () => {
    // Assert
    expect(studentFetchRequestCompleted).not.to.be.undefined;
  });

  it('contains the expected type GET_STUDENT_REQUEST_COMPLETED', () => {
    // Assert
    expect(studentFetchRequestCompleted(new Student()).type)
      .to.be.equals(adminActionEnums.GET_STUDENT_REQUEST_COMPLETED);
  });

  it('contains the expected payload including the student', () => {
    // Arrange
    const student: Student = {
      id: 1,
      fullname: 'foo',
      phoneNumber: '999 99',
      email: 'foo@test.com',
      isActive: true,
    };

    // Act
    const actionResult = studentFetchRequestCompleted(student);

    // Assert
    expect(actionResult.payload).not.to.be.undefined;
    expect(actionResult.payload).to.be.equal(student);
  });
});

describe('studentFetchRequestStarted', () => {
  it('should be defined', () => {
    // Assert
    expect(studentFetchRequestStarted).not.to.be.undefined;
  });

  it('should return request action type completed', sinon.test((done) => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    // Act
    const store = mockStore([]);
    store.dispatch(studentFetchRequestStarted(1))
      .then(() => {
        // Assert
        expect(store.getActions()[0].type).to.be.equal(adminActionEnums.GET_STUDENT_REQUEST_COMPLETED);
        done();
      });
  }).bind(this));

  it('should return expected student data', sinon.test((done) => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const student: Student = {
      id: 1,
      fullname: 'foo',
      phoneNumber: '999 99',
      email: 'foo@test.com',
      isActive: true,
    };

    const getStudentByIdStub = sinon.stub(studentApi, 'getStudentById');

    getStudentByIdStub.returns({
      then: (callback) => {
        callback(student);
      },
    });

    // Act
    const store = mockStore([]);
    store.dispatch(studentFetchRequestStarted(1))
      .then(() => {
        // Assert
        expect(store.getActions()[0].payload).to.be.equal(student);
        expect(getStudentByIdStub.called).to.be.true;
        done();
      });
  }).bind(this));

});
