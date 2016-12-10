import { adminActionEnums } from './../common/actionEnums/admin';
import { TrainingSummary } from './../model/trainingSummary';

export class AdminTrainingState {
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
  (state : AdminTrainingState, payload : TrainingSummary[]) => {
      const newState = Object.assign({}, state, {trainingSummaryList: payload});
      return newState;
}