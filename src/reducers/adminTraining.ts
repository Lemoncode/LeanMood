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
