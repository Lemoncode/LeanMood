import { Action } from 'redux';
import { StudentSummary } from '../model/studentSummary';
import { Student } from '../model/student';
import { adminActionEnums } from '../common/actionEnums/admin';

export class AdminStudentState {
  public studentSummaryList: StudentSummary[];
  public editingStudent: Student;

  public constructor() {
    this.studentSummaryList = [];
  }
}

export const adminStudentReducer = (state: AdminStudentState = new AdminStudentState(), action) => {
  switch (action.type) {
    case adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED:
      return handleGetSummaryStudentRequestCompleted(state, action.payload);
    case adminActionEnums.GET_STUDENT_REQUEST_COMPLETED:
      return handleGetStudentRequestCompleted(state, action.payload);
    default:
  }

  return state;
};

const handleGetSummaryStudentRequestCompleted =
  (state: AdminStudentState, payload: StudentSummary[]) => {
    const newState = Object.assign({}, state, { studentSummaryList: payload });
    return newState;
  };

const handleGetStudentRequestCompleted =
  (state: AdminStudentState, payload: Student) => {
    const newState = Object.assign({}, state, { editingStudent: payload });
    return newState;
  };
