import { adminActionEnums } from './../common/actionEnums/admin';
import { TrainingSummary } from './../model/trainingSummary';

export class AdminTrainingState {
  public trainingSummaryList: TrainingSummary[];

  public constructor() {
    this.trainingSummaryList = [];
  }
}

export const adminTrainingReducer = (state: AdminTrainingState = new AdminTrainingState(), action) => {
  switch (action.type) {
    case adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED:
      return handleGetSummaryTrainingRequestCompleted(state, action.payload);
    default:
  }

  return state;
};

const handleGetSummaryTrainingRequestCompleted = (state: AdminTrainingState, payload: TrainingSummary[]) => {
  return {
    ...state,
    trainingSummaryList: payload,
  };
};
