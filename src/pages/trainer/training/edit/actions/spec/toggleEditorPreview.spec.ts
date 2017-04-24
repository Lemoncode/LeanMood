import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {toggleEditorPreviewAction} from '../toggleEditorPreview';

describe('trainingContentChangedAction', () => {
  it('should be defined', () => {
    // Assert
    expect(toggleEditorPreviewAction).not.to.be.undefined;
  });

  it('returns expected type equals TRAINING_CONTENT_CHANGED', () => {
    // Act
    const actionResult = toggleEditorPreviewAction();

    // Assert
    expect(actionResult.type).to.equal(trainerActionEnums.TOGGLE_EDITOR_PREVIEW);
  });
});
