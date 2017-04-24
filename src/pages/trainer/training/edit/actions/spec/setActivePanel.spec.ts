import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import { setActivePanelAction } from '../setActivePanel';

describe('setActivePanelAction', () => {
  it('should be defined', () => {
    // Assert
    expect(setActivePanelAction).not.to.be.undefined;
  });

  it('returns expected type equals SET_ACTIVE_PANEL', () => {
    // Act
    const actionResult = setActivePanelAction(null);

    // Assert
    expect(actionResult.type).to.equal(trainerActionEnums.SET_ACTIVE_PANEL);
  });

  it('returns expected payload', () => {
    // Arrange
    const panelId = 'mypanel';

    // Act
    const actionResult = setActivePanelAction(panelId);

    // Assert
    expect(actionResult.payload).to.equal(panelId);
  });
});
