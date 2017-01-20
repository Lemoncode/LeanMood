import {trainerActionEnums} from '../../common/actionEnums/trainer';
import {TrainingState, trainingReducer} from './training';

export class TrainerState {
  public training: TrainingState;

  constructor() {
    this.training = new TrainingState();
  }
}

export const trainerReducer = (state: TrainerState = new TrainerState(), action) => {
  switch (action.type) {
    case trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED:
      return handleTrainingReducer(state, action);
    default:
  }
  return state;
};

const handleTrainingReducer = (state: TrainerState, action) => {
  return Object.assign({}, state, {
    training: trainingReducer(state.training, action),
  });
};
