import { adminActionEnums } from '../common/actionEnums/admin';
import { StudentSummary } from '../model/studentSummary';

export class AdminStudentState {
  public studentSummaryList: StudentSummary[];
  public editingStudentSummary: StudentSummary;

  public constructor() {
    this.studentSummaryList = [];
    this.editingStudentSummary = new StudentSummary();
  }
}

export const adminStudentReducer = (state: AdminStudentState = new AdminStudentState(), action) => {
  switch (action.type) {
    case adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED:
      return handleGetSummaryStudentRequestCompleted(state, action.payload);
    case adminActionEnums.GET_SUMMARY_STUDENT_BY_ID_REQUEST_COMPLETED:
      return handleGetSummaryStudentByIdRequestCompleted(state, action.payload);
    default:
      return state;
  }
};

const handleGetSummaryStudentRequestCompleted = (state: AdminStudentState, payload: StudentSummary[]) => {
  return {
    ...state,
    studentSummaryList: payload,
  };
};

const handleGetSummaryStudentByIdRequestCompleted = (state: AdminStudentState, payload: StudentSummary) => {
  return {
    ...state,
    editingStudentSummary: payload,
  };
};