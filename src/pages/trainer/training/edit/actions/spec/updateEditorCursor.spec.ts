import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {updateEditorCursorAction} from '../updateEditorCursor';

describe('updateEditorCursor', () => {
  it('should be defined', () => {
    // Assert
    expect(updateEditorCursorAction).not.to.be.undefined;
  });

  it('returns expected type equals UPDATE_EDITOR_CURSOR', () => {
    // Act
    const actionResult = updateEditorCursorAction(null, null);
    // Assert
    expect(actionResult.type).to.equal(trainerActionEnums.UPDATE_EDITOR_CURSOR);
  });

  it('returns expected payload equals expected cursorStart and cursorEnd', () => {
    // Arrange
    const expectedCursorStart = 1;
    const expectedCursorEnd = 2;

    // Act
    const actionResult = updateEditorCursorAction(expectedCursorStart, expectedCursorEnd);
    // Assert
    expect(actionResult.payload.cursorStart).to.equal(expectedCursorStart);
    expect(actionResult.payload.cursorEnd).to.equal(expectedCursorEnd);
  });
});
