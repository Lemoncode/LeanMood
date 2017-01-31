import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';
import {textAreaTool} from '../../../../../common/ui/tools/textAreaTool';

export const updateTrainingContentAction = (textArea: HTMLTextAreaElement, caret: string, offset: number) => {
  const contentWithCaret = textAreaTool.insertAtCaretGetText(textArea, caret, offset);

  return {
    type: trainerActionEnums.UPDATE_TRAINING_CONTENT,
    payload: contentWithCaret,
  };
};
