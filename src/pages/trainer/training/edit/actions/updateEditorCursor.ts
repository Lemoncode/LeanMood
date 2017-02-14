import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';

export const updateEditorCursorAction = (cursorStartPosition: number) => ({
  type: trainerActionEnums.UPDATE_EDITOR_CURSOR,
  payload: cursorStartPosition,
});
