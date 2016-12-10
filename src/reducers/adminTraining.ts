import { adminActionEnums } from './../common/actionEnums/admin';
import { TrainingSummary } from './../model/trainingSummary';

export class AdminTrainigState {
    trainingSummaryList: TrainingSummary[];

    public constructor() {
        this.trainingSummaryList = [];
    }
}

export const adminTrainingReducer = (state, action) => {
    switch(action.type) {
        case adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED:
            return handleGetSummaryTrainingRequestCompleted(state, action.payload);
    }

    return state;
}

const handleGetSummaryTrainingRequestCompleted =
  (state : AdminTrainigState, payload : TrainingSummary[]) => {
      const newState = Object.assign({}, state, {trainingSummaryList: payload});
      return newState;
}