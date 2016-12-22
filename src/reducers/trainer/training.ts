import {trainerActionEnums} from '../../common/actionEnums/trainer';

export class TrainingState {
  content: string;

  constructor() {
    this.content = '';
  }
}

export const trainingReducer = (state: TrainingState = new TrainingState(), action) => {
  switch(action.type) {
    case trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED:
      return handleGetTrainingContentRequestCompleted(state, action.payload);
  }
  return state;
}

const handleGetTrainingContentRequestCompleted =
(state: TrainingState, payload: string) => {
  return Object.assign({}, state, {
    content: payload
  });
}
