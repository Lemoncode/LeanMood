import { adminActionEnums } from '../common/actionEnums/admin';
import { StudentSummary } from '../model/studentSummary';

export class AdminStudentState {
  public studentSummaryList: StudentSummary[];

  public constructor() {
    this.studentSummaryList = [];
  }
}

export const adminStudentReducer = (state: AdminStudentState = new AdminStudentState(), action) => {
  switch (action.type) {
    case adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED:
      return handleGetSummaryStudentRequestCompleted(state, action.payload);
    default:
      return state;
  }
};

const handleGetSummaryStudentRequestCompleted =
  (state: AdminStudentState, payload: StudentSummary[]) => {
    const newState = Object.assign({}, state, { studentSummaryList: payload });
    return newState;
  };
