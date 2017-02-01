import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';
import {textAreaTool} from '../../../../../common/ui/tools/textAreaTool';

export const updateEditorAction = (textArea: HTMLTextAreaElement, caret: string, offset: number) => {
  const contentWithCaret = textAreaTool.insertAtCaretGetText(textArea, caret, offset);
  const cursorStart = textAreaTool.caculateStartCursorPositionPlusOffset(textArea, offset);

  return {
    type: trainerActionEnums.UPDATE_EDITOR,
    payload: {
      content: contentWithCaret,
      cursorStart,
    },
  };
};
