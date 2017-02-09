import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {trainingContentChangedAction} from '../trainingContentChanged';

describe('trainingContentChangedAction', () => {
  it('should be defined', () => {
    // Assert
    expect(trainingContentChangedAction).not.to.be.undefined;
  });

  it('returns expected type equals TRAINING_CONTENT_CHANGED', () => {
    // Act
    const actionResult = trainingContentChangedAction(null);

    // Assert
    expect(actionResult.type).to.equal(trainerActionEnums.TRAINING_CONTENT_CHANGED);
  });

  it('returns expected payload equals content', () => {
    // Arrange
    const expectedContent = 'Test content';

    // Act
    const actionResult = trainingContentChangedAction(expectedContent);

    // Assert
    expect(actionResult.payload).to.equal(expectedContent);
  });
});
