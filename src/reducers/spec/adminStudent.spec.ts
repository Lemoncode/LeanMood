import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import {} from 'mocha'
import {} from 'core-js'
import { adminStudentReducer, AdminStudentState } from '../adminStudent';
import { StudentSummary } from '../../model/studentSummary'
import { Student } from '../../model/student'
import { summaryStudentListRequestCompleted } from '../../pages/admin/student/list/actions/summaryStudentListRequest'
import {adminActionEnums} from '../../common/actionEnums/admin'

describe('adminStudentReducer', () => {
  it("is defined", () => {
    // Arrange
    // Act
    // Assert
    expect(adminStudentReducer).not.be.undefined;
  });

  it("should return same state when passing an action that is not expected", () => {
    // Arrange
    const originalState : AdminStudentState = new AdminStudentState();

    const action = {
      type: 'NOT_EXPECTED_ACTION_242424242'
    }

    // Act
    const newState = adminStudentReducer(originalState, action);

    // Assert
    expect(newState).to.be.equal(originalState);

  });

  it(`should return a new state including new student list when
    passing a GET_SUMMARY_TRAINING_REQUEST_COMPLETED`,() => {
    // Arrange
    const originalState = new AdminStudentState();

    deepFreeze(originalState);

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

    const actionResult = {
      type: adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED,
      payload: students
    }

    // Act
    const newState = adminStudentReducer(originalState, actionResult);

    // Assert
    expect(newState.studentSummaryList).to.eql(students);
  });

  it(`should return a new state including editing student when
    passing a GET_STUDENT_REQUEST_COMPLETED`,() => {
    // Arrange
    const originalState = new AdminStudentState();

    deepFreeze(originalState);

    const student : Student = {
        id: 1,
        fullname: 'foo',
        phoneNumber: '999 99',
        email: 'foo@test.com',
        isActive: true
      };

    const actionResult = {
      type: adminActionEnums.GET_STUDENT_REQUEST_COMPLETED,
      payload: student
    }

    // Act
    const newState = adminStudentReducer(originalState, actionResult);

    // Assert
    expect(newState.editingStudent).to.eql(student);
  })
});
