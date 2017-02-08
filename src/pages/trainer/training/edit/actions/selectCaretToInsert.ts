import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';
import {textAreaTool} from '../../../../../common/ui/tools/textAreaTool';

export interface ISelectCaretToInsertPayload {
  caret: string;
  offset: number;
}

export const selectCaretToInsertAction = (caret: string, offset: number) => ({
  type: trainerActionEnums.SELECT_CARET_TO_INSERT,
  payload: {
    caret,
    offset,
  } as ISelectCaretToInsertPayload,
});
