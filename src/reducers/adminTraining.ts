<<<<<<< HEAD
import { Action } from 'redux';
import { TrainingEntity } from '../model/training';
import { adminActionEnums} from '../common/actionEnums/admin';


export class AdminTrainingState {
  editTraining : TrainingEntity;

  public constructor() {
    this.editTraining = new TrainingEntity();
  }
}

export const adminTrainingReducer = (state : AdminTrainingState = new AdminTrainingState(), action) => {
  switch(action.type) {
    case adminActionEnums.GET_TRAINING_REQUEST_COMPLETED:
      return handleGetTrainingRequestCompleted(state, action.payload);
  }

  return state;
}

const handleGetTrainingRequestCompleted =
  (state : AdminTrainingState, payload : TrainingEntity) => {
      const newState = Object.assign({}, state, {editTraining: payload});
      return newState;
}
=======
import { adminActionEnums } from './../common/actionEnums/admin';
import { TrainingSummary } from './../model/trainingSummary';

export class AdminTrainingState {
    trainingSummaryList: TrainingSummary[];

    public constructor() {
        this.trainingSummaryList = [];
    }
}

export const adminTrainingReducer = (state: AdminTrainingState = new AdminTrainingState(), action) => {
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
>>>>>>> 5541906c0f761bfd48de9d0580e7dcda3a3d4650
