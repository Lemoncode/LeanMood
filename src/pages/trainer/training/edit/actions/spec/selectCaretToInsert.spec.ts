import * as cheerio from 'cheerio';
import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {textAreaTool} from '../../../../../../common/ui/tools/textAreaTool';
import {selectCaretToInsertAction} from '../selectCaretToInsert';

describe('updateEditorAction', () => {
  it('should be defined', () => {
    // Assert
    expect(selectCaretToInsertAction).not.to.be.undefined;
  });

  it('returns expected type equals SELECT_CARET_TO_INSERT', () => {
    // Act
    const actionResult = selectCaretToInsertAction(null, null);

    // Assert
    expect(actionResult.type).to.equal(trainerActionEnums.SELECT_CARET_TO_INSERT);
  });

  it('returns expected payload', () => {
    // Arrange
    const caret = '**';
    const offset = 0;

    // Act
    const actionResult = selectCaretToInsertAction(caret, offset);

    // Assert
    expect(actionResult.payload.caret).to.equal(caret);
    expect(actionResult.payload.offset).to.equal(offset);
  });
});
