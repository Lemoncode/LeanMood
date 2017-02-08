import * as cheerio from 'cheerio';
import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {IToolbarCommand} from '../../components/toolbar';
import {selectToolbarCommandAction} from '../selectToolbarCommand';

describe('updateEditorAction', () => {
  it('should be defined', () => {
    // Assert
    expect(selectToolbarCommandAction).not.to.be.undefined;
  });

  it('returns expected type equals SELECT_TOOLBAR_COMMAND', () => {
    // Act
    const actionResult = selectToolbarCommandAction(null);

    // Assert
    expect(actionResult.type).to.equal(trainerActionEnums.SELECT_TOOLBAR_COMMAND);
  });

  it('returns expected payload', () => {
    // Arrange
    const toolbarCommand: IToolbarCommand = {
      caret: '**',
      offset: 0,
    };

    // Act
    const actionResult = selectToolbarCommandAction(toolbarCommand);

    // Assert
    expect(actionResult.payload.toolbarCommand).to.equal(toolbarCommand);
  });
});
