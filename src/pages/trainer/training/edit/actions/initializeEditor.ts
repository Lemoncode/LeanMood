import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';

export const initializeEditorAction = (textArea: HTMLTextAreaElement) => ({
  type: trainerActionEnums.INITIALIZE_EDITOR,
  payload: textArea,
});
