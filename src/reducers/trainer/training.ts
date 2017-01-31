import {trainerActionEnums} from '../../common/actionEnums/trainer';

export class TrainingState {
  public content: string;

  constructor() {
    this.content = '';
  }
}

export const trainingReducer = (state: TrainingState = new TrainingState(), action) => {
  switch (action.type) {
    case trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED:
      return handleGetfetchTrainingContentCompleted(state, action.payload);
    default:
      return state;
  }
};

const handleGetfetchTrainingContentCompleted =
(state: TrainingState, payload: string) => {
  return Object.assign({}, state, {
    content: payload,
  });
};
