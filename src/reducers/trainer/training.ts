import {trainerActionEnums} from '../../common/actionEnums/trainer';
import {ISelectCaretToInsertPayload} from '../../pages/trainer/training/edit/actions/selectCaretToInsert';

export class TrainingState {
  public content: string;
  public caret: string;
  public offset: number;
  public shouldSetEditorFocus: boolean;

  constructor() {
    this.content = '';
    this.caret = null;
    this.offset = 0;
    this.shouldSetEditorFocus = false;
  }
}

export const trainingReducer = (state: TrainingState = new TrainingState(), action) => {
  switch (action.type) {
    case trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED:
    case trainerActionEnums.TRAINING_CONTENT_CHANGED:
      return handleUpdateTrainingContent(state, action.payload);

    case trainerActionEnums.SELECT_CARET_TO_INSERT:
      return handleSelectCaretToInsert(state, action.payload);

    default:
      return state;
  }
};

const handleUpdateTrainingContent = (state: TrainingState, payload: string) => ({
  ...state,
  content: payload,
  shouldSetEditorFocus: false,
});

const handleSelectCaretToInsert = (state: TrainingState, payload: ISelectCaretToInsertPayload) => ({
  ...state,
  caret: payload.caret,
  offset: payload.offset,
  shouldSetEditorFocus: true,
});
