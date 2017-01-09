import { Action } from 'redux';
import { Training } from '../model/training';
import { adminActionEnums } from './../common/actionEnums/admin';
import { TrainingSummary } from './../model/trainingSummary';

export class AdminTrainingState {
    public trainingSummaryList: TrainingSummary[];
    public editTraining: Training;

    public constructor() {
        this.trainingSummaryList = [];
        this.editTraining = new Training();
    }
}

export const adminTrainingReducer = (state: AdminTrainingState = new AdminTrainingState(), action) => {
    switch (action.type) {
        case adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED:
            return handleGetSummaryTrainingRequestCompleted(state, action.payload);
        case adminActionEnums.GET_TRAINING_REQUEST_COMPLETED:
            return handleGetTrainingRequestCompleted(state, action.payload);
        default:
    }

    return state;
};

const handleGetTrainingRequestCompleted =
  (state: AdminTrainingState, payload: Training) => {
      const newState = Object.assign({}, state, {editTraining: payload});
      return newState;
};
const handleGetSummaryTrainingRequestCompleted =
  (state: AdminTrainingState, payload: TrainingSummary[]) => {
      const newState = Object.assign({}, state, {trainingSummaryList: payload});
      return newState;
};
