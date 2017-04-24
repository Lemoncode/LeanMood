import { studentActionEnums } from './../../common/actionEnums/student';
import { TrainingSummary } from './../../model/trainingSummary';

export class StudentTrainingState {
  public list: TrainingSummary[];

  public constructor() {
    this.list = [];
  }
}

export const studentTrainingReducer = (state: StudentTrainingState = new StudentTrainingState(), action) => {
  switch (action.type) {
    case studentActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED:
      return handleGetSummaryTrainingRequestCompleted(state, action.payload);
    default:
      return state;
  }
};

const handleGetSummaryTrainingRequestCompleted = (state: StudentTrainingState, payload: TrainingSummary[]) => {
  return {
    ...state,
    list: payload,
  };
};
