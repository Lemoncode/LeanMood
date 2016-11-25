import { expect } from 'chai';
import {} from 'mocha'
import {} from 'core-js'
import {adminActionEnums} from '../../../../../../common/actionEnums/admin'
import { summaryStudentListRequestCompleted } from '../summaryStudentListRequest'
import { StudentSummary} from '../../../../../../model/studentSummary'

describe('summaryStudentListRequestCompleted', () => {
  it('is defined', () => {
    // Assert
    expect(summaryStudentListRequestCompleted).not.to.be.undefined;
  });

  it('contains the expected type GET_SUMMARY_TRAINING_REQUEST_COMPLETED', () => {
    // Assert
    expect(summaryStudentListRequestCompleted().type).to.be.equals(adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED);
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
    expect(actionResult.payload.length).to.be.equal(2);
    expect(actionResult.payload).to.be.equal(students);
  });
})
