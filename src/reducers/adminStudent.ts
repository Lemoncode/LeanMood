import { Action } from 'redux'
import { StudentSummary } from '../model/studentSummary'
import { Student } from '../model/student'
import { adminActionEnums } from '../common/actionEnums/admin'


export class AdminStudentState {
  studentSummaryList: StudentSummary[];
  editingStudent: Student;

  public constructor() {
    this.studentSummaryList = [];
  }
}

export const adminStudentReducer = (state: AdminStudentState = new AdminStudentState(), action) => {
  switch (action.type) {
    case adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED:
      return handleGetSummaryTrainingRequestCompleted(state, action.payload);
    case adminActionEnums.GET_STUDENT_REQUEST_COMPLETED:
      return handleGetStudentRequestCompleted(state, action.payload);
  }

  return state;
}

const handleGetSummaryTrainingRequestCompleted =
  (state: AdminStudentState, payload: StudentSummary[]) => {
    const newState = Object.assign({}, state, { studentSummaryList: payload });
    return newState;
  }

const handleGetStudentRequestCompleted =
  (state: AdminStudentState, payload: Student) => {
    const newState = Object.assign({}, state, { editingStudent: payload });
    return newState;
  }
