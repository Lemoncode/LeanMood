import { Student } from '../../../model/student';
import { StudentSummary } from '../../../model/studentSummary';
import { mapStudentsToStudentSummaryList } from './studentToStudentSummary';

describe('mapStudentsToStudentSummaryList', () => {
  it('should return emtpy array when passing students equals undefined', () => {
    // Arrange
    const students: Student[] = undefined;

    // Act
    const result = mapStudentsToStudentSummaryList(students);

    // Assert
    expect(result).to.be.empty;
  });

  it('should return emtpy array when passing students equals null', () => {
    // Arrange
    const students: Student[] = null;

    // Act
    const result = mapStudentsToStudentSummaryList(students);

    // Assert
    expect(result).to.be.empty;
  });

  it('should return emtpy array when passing students equals empty', () => {
    // Arrange
    const students: Student[] = [];

    // Act
    const result = mapStudentsToStudentSummaryList(students);

    // Assert
    expect(result).to.be.empty;
  });

  it('should return array with one item when passing students with one item', () => {
    // Arrange
    const students: Student[] = [
      {
        id: 1,
        email: 'test email',
        fullname: 'test fullname',
        phoneNumber: 'test phoneNumber',
        isActive: true,
      },
    ];

    // Act
    const result = mapStudentsToStudentSummaryList(students);

    // Assert
    expect(result.length).to.equal(1);
    expect(result[0].id).to.equal(students[0].id);
    expect(result[0].email).to.equal(students[0].email);
    expect(result[0].fullname).to.equal(students[0].fullname);
    expect(result[0].isActive).to.be.true;
  });
});
