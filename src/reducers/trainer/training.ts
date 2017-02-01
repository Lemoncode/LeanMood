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
    case trainerActionEnums.TRAINING_CONTENT_CHANGED:
      return handleupdateEditor(state, action.payload);

    case trainerActionEnums.INITIALIZE_EDITOR:
      return handleInitializeEditor(state, action.payload);

    case trainerActionEnums.UPDATE_EDITOR:
      return handleUpdateEditor(state, action.payload);

    default:
      return state;
  }
};

const handleupdateEditor = (state: TrainingState, payload: string) => ({
  ...state,
  content: payload,
});

const handleInitializeEditor = (state: TrainingState, payload: HTMLTextAreaElement) => ({
  ...state,
  editor: payload,
});

const handleUpdateEditor = (state: TrainingState, payload: {content: string, cursorStart: number}) => ({
  ...state,
  content: payload.content,
  editor: {
    ...state.editor,
    selectionStart: payload.cursorStart,
  },
});
