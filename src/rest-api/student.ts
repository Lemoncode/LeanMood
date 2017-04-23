import { Student } from '../model/student/student';
import { StudentSummary } from '../model/student/studentSummary';
import { studentMockData } from './studentMockData';

class StudentApi {
  public studentList: Student[];

  constructor() {
    this.studentList = studentMockData;
  }

  public setMockDataSeed(studentList: Student[]) {
    this.studentList = studentList;
  }

  public getSummaryStudentList(): Promise<StudentSummary[]> {
    const studentSummaryList: StudentSummary[] = this.studentList.map((student) => {
      const summary = new StudentSummary();
      summary.id = student.id;
      summary.fullname = student.fullname;
      summary.email = student.email;
      summary.isActive = student.isActive;

      return summary;
    });

    return Promise.resolve(studentSummaryList);
  }

  public getStudentById(id: number): Promise<Student> {
    const student: Student = this.studentList.find( (s) => s.id === id);
    return Promise.resolve(student);
  }

  public saveStudent(student: Student): Promise<boolean> {
    let currentStudent: Student = this.studentList.find( (s) => s.id === student.id);
    currentStudent = student;
    return Promise.resolve(true);
  }
}

export const studentApi = new StudentApi();
