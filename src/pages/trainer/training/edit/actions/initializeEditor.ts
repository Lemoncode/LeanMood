import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';

export const initializeEditorAction = (editor: HTMLTextAreaElement) => ({
  type: trainerActionEnums.INITIALIZE_EDITOR,
  payload: editor,
});
