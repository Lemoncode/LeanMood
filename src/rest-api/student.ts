import { Student } from '../model/student';
import { StudentSummary } from '../model/studentSummary';
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

   public getStudentById(id : number): Promise<StudentSummary> 
   {
    const studentSummary: StudentSummary = this.studentList.find(st => st.id === id);
    return Promise.resolve(studentSummary);
  }
}

export const studentApi = new StudentApi();
