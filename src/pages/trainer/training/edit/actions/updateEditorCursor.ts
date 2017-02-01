import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';

export const updateEditorCursorAction = (cursorStart: number, cursorEnd: number ) => ({
  type: trainerActionEnums.UPDATE_EDITOR_CURSOR,
  payload: {
    cursorStart,
    cursorEnd,
  },
});
