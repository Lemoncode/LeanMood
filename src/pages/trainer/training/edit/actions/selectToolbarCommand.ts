import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';
import {IToolbarCommand} from '../components/toolbar';

export interface ISelectToolbarCommandPayload {
  toolbarCommand: IToolbarCommand;
}

export const selectToolbarCommandAction = (toolbarCommand: IToolbarCommand) => ({
  type: trainerActionEnums.SELECT_TOOLBAR_COMMAND,
  payload: {
    toolbarCommand,
  } as ISelectToolbarCommandPayload,
});
