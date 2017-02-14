import {trainerActionEnums} from '../../common/actionEnums/trainer';

export class TrainingState {
  public content: string;
  public cursorStartPosition: number;
  public shouldUpdateEditorCursor: boolean;

  constructor() {
    this.content = '';
    this.cursorStartPosition = 0;
    this.shouldUpdateEditorCursor = false;
  }
}

export const trainingReducer = (state: TrainingState = new TrainingState(), action) => {
  switch (action.type) {
    case trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED:
    case trainerActionEnums.TRAINING_CONTENT_CHANGED:
      return handleUpdateTrainingContent(state, action.payload);

    case trainerActionEnums.UPDATE_EDITOR_CURSOR:
      return handleUpdateEditorCursor(state, action.payload);

    default:
      return state;
  }
};

const handleUpdateTrainingContent = (state: TrainingState, payload: string) => ({
  ...state,
  content: payload,
  shouldUpdateEditorCursor: false,
});

const handleUpdateEditorCursor = (state: TrainingState, payload: number) => ({
  ...state,
  cursorStartPosition: payload,
  shouldUpdateEditorCursor: true,
});
