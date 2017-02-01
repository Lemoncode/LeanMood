import {trainerActionEnums} from '../../common/actionEnums/trainer';

export class TrainingState {
  public content: string;
  public editor: HTMLTextAreaElement;

  constructor() {
    this.content = '';
    this.editor = null;
  }
}

export const trainingReducer = (state: TrainingState = new TrainingState(), action) => {
  switch (action.type) {
    case trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED:
    case trainerActionEnums.UPDATE_TRAINING_CONTENT:
    case trainerActionEnums.TRAINING_CONTENT_CHANGED:
      return handleUpdateTrainingContent(state, action.payload);

    case trainerActionEnums.INITIALIZE_EDITOR:
      return {
        ...state,
        editor: action.payload,
      };

    default:
      return state;
  }
};

const handleUpdateTrainingContent = (state: TrainingState, payload: string) => ({
  ...state,
  content: payload,
});
