import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';
import {textAreaTool} from '../../../../../common/ui/tools/textAreaTool';

export const updateEditorAction = (editor: HTMLTextAreaElement, caret: string, offset: number) => {
  const contentWithCaret = textAreaTool.insertAtCaretGetText(editor, caret, offset);
  const cursorStartPosition = textAreaTool.caculateStartCursorPositionPlusOffset(editor, offset);

  return {
    type: trainerActionEnums.UPDATE_EDITOR,
    payload: {
      content: contentWithCaret,
      cursorStartPosition,
    },
  };
};
