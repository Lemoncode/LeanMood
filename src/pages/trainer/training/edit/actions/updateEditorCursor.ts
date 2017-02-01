import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';
import {textAreaTool} from '../../../../../common/ui/tools/textAreaTool';

export const updateEditorCursorAction = (editor: HTMLTextAreaElement, cursorStartPosition: number) => {
  textAreaTool.placeCursor(editor, cursorStartPosition);

  return {
    type: trainerActionEnums.UPDATE_EDITOR_CURSOR,
  };
};
