import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';

export const setActivePanelAction = (panel: string) => ({
  type: trainerActionEnums.SET_ACTIVE_PANEL,
  payload: panel,
});
