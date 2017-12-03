import { trainerActionEnums } from '../../common/actionEnums/trainer';
import { TrainingSummary } from '../../model/trainingSummary';

export class TrainingState {
  public content: string;
  public cursorStartPosition: number;
  public shouldUpdateEditorCursor: boolean;
  public showPreview: boolean;
  public activePanelId: string;
  public list: TrainingSummary[];

  constructor() {
    this.content = '';
    this.cursorStartPosition = 0;
    this.shouldUpdateEditorCursor = false;
    this.showPreview = false;
    this.activePanelId = '';
    this.list = [];
  }
}

export const trainingReducer = (state: TrainingState = new TrainingState(), action) => {
  switch (action.type) {
    case trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED:
    case trainerActionEnums.TRAINING_CONTENT_CHANGED:
      return handleUpdateTrainingContent(state, action.payload);

    case trainerActionEnums.UPDATE_EDITOR_CURSOR:
      return handleUpdateEditorCursor(state, action.payload);

    case trainerActionEnums.TOGGLE_EDITOR_PREVIEW:
      return handleToggleEditorPreview(state);

    case trainerActionEnums.SET_ACTIVE_PANEL:
      return handleSetActivePanel(state, action.payload);

    case trainerActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED:
      return handleGetSummaryTrainingRequestCompleted(state, action.payload);

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

const handleSetActivePanel = (state: TrainingState, payload: string) => ({
  ...state,
  activePanelId: payload,
});

const handleToggleEditorPreview = (state: TrainingState) => ({
  ...state,
  showPreview: !state.showPreview,
  shouldUpdateEditorCursor: false,
});

const handleGetSummaryTrainingRequestCompleted = (state: TrainingState, payload: TrainingSummary[]) => ({
  ...state,
  list: payload,
});
