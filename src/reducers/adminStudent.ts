import { StudentSummary } from '../model/studentSummary'
import { adminActionEnums} from '../common/actionEnums/admin'


export class AdminStudentState {
  studentSummaryList : StudentSummary[];

  public constructor() {
    this.studentSummaryList = [];
  }
}

export const adminStudentReducer = (state : AdminStudentState = new AdminStudentState(), action) => {
  switch(action.type) {
    case adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED:
<<<<<<< HEAD
      return handleGetSummaryTrainingRequestCompleted(state, action.payload);
=======
      return handleGetSummaryStudentRequestCompleted(state, action.payload);
>>>>>>> 5541906c0f761bfd48de9d0580e7dcda3a3d4650
  }

  return state;
}

const handleGetSummaryStudentRequestCompleted =
  (state : AdminStudentState, payload : StudentSummary[]) => {
      const newState = Object.assign({}, state, {studentSummaryList: payload});
      return newState;
}
