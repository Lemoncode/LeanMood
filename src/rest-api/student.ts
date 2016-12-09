import { Student } from '../model/student'
import { StudentSummary } from '../model/studentSummary'
import { studentMockData } from './studentMockData'

class StudentApi {
  studentList: Student[];

  constructor() {
    this.studentList = studentMockData;
  }

  setMockDataSeed(studentList: Student[]) {
    this.studentList = studentList;
  }

  getSummaryStudentList(): Promise<StudentSummary[]> {
    const studentSummaryList: StudentSummary[] = this.studentList.map((student) => {
      const summary = new StudentSummary();
      summary.id = student.id;
      summary.fullname = student.fullname;
      summary.email = student.email;

      return summary;
    });

    return Promise.resolve(studentSummaryList);
  }

  getStudentById(id: number): Promise<Student> {
    const student: Student = this.studentList.find(s => s.id === id);
    return Promise.resolve(student);
  }
}

export const studentApi = new StudentApi();
