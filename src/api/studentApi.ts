import { StudentSummary } from '../model/studentSummary'
import { studentsSummaryMockData } from './studentSummaryMockData'

class StudentApi {
  getSummaryStudentList() : Promise<StudentSummary[]> {
        return Promise.resolve(studentsSummaryMockData);
  }
}

export const studentApi = new StudentApi();
