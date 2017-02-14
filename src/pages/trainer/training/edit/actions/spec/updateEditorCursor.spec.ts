import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {updateEditorCursorAction} from '../updateEditorCursor';

describe('updateEditorCursorAction', () => {
  it('should be defined', () => {
    // Assert
    expect(updateEditorCursorAction).not.to.be.undefined;
  });

  it('returns expected type equals UPDATE_EDITOR_CURSOR', () => {
    // Act
    const actionResult = updateEditorCursorAction(null);

    // Assert
    expect(actionResult.type).to.equal(trainerActionEnums.UPDATE_EDITOR_CURSOR);
  });

  it('returns expected payload', () => {
    // Arrange
    const cursorStartPosition = 5;

    // Act
    const actionResult = updateEditorCursorAction(cursorStartPosition);

    // Assert
    expect(actionResult.payload).to.equal(cursorStartPosition);
  });
});
