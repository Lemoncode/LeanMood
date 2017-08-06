import { Training } from '../../model/student';
import { TrainingTOC } from '../../../model/student/trainingToc';
import { mapTrainingToTrainingTOC } from './trainingToTrainingTOC';

describe('mapTrainingToTrainingTOC', () => {
  it('should return null when passing training equals undefined', () => {
    // Arrange
    const training: Training = undefined;

    // Act
    const result = mapTrainingToTrainingTOC(training);

    // Assert
    expect(result).to.be.null;
  });

  it('should return null when passing training equals null', () => {
    // Arrange
    const training: Training = null;

    // Act
    const result = mapTrainingToTrainingTOC(training);

    // Assert
    expect(result).to.be.null;
  });

  it('should return empty values when passing training with empty values', () => {
    // Arrange
    const training: Training = {
      _id: '',
      name: '',
      markdownContent: '',
    };

    // Act
    const result = mapTrainingToTrainingTOC(training);

    // Assert
    expect(result.id).to.be.empty;
    expect(result.name).to.be.empty;
    expect(result.content).to.be.empty;
  });

  it('should return one item with values when passing training with one item', () => {
    // Arrange
    const training: Training = {
      _id: 'test id',
      name: 'test name',
      markdownContent: 'test markdownContent',
    };

    // Act
    const result = mapTrainingToTrainingTOC(training);

    // Assert
    expect(result.id).to.equal(training._id);
    expect(result.name).to.equal(training.name);
    expect(result.content).to.equal(training.markdownContent);
  });
});
