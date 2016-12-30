import { Action } from 'redux';
import { TrainingEntity } from '../model/training';
import { adminActionEnums } from './../common/actionEnums/admin';
import { TrainingSummary } from './../model/trainingSummary';


export class AdminTrainingState {
    trainingSummaryList: TrainingSummary[];
    editTraining : TrainingEntity;

    public constructor() {
        this.trainingSummaryList = [];
        this.editTraining = new TrainingEntity();
    }
}

export const adminTrainingReducer = (state : AdminTrainingState = new AdminTrainingState(), action) => {
  switch(action.type) {
    case adminActionEnums.GET_TRAINING_REQUEST_COMPLETED:
      return handleGetTrainingRequestCompleted(state, action.payload);
    case adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED:
            return handleGetSummaryTrainingRequestCompleted(state, action.payload);
  }

  return state;
}

const handleGetTrainingRequestCompleted =
  (state : AdminTrainingState, payload : TrainingEntity) => {
      const newState = Object.assign({}, state, {editTraining: payload});
      return newState;
}
const handleGetSummaryTrainingRequestCompleted =
  (state : AdminTrainingState, payload : TrainingSummary[]) => {
      const newState = Object.assign({}, state, {trainingSummaryList: payload});
      return newState;
}