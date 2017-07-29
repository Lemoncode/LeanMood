import { Student } from '../../../model/student';
import { StudentSummary } from '../../../model/studentSummary';

export const mapStudentsToStudentSummaryList = (students: Student[]): StudentSummary[] => (
  Boolean(students) ?
    students.map((student) => (
      {
        id: student.id,
        email: student.email,
        fullname: student.fullname,
        isActive: student.isActive,
      } as StudentSummary
    )) :
    []
);
