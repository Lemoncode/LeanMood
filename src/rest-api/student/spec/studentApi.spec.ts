import { studentAPI } from '../studentApi';
import { TrainingTOC } from '../../../model/student/trainingToc';

describe('StudentAPI', () => {
  it('should be an object', () => {
    // Assert
    expect(studentAPI).to.be.an('object').and.not.to.be.null;
  });

  it('should have a "getTOCByTraining" method that returns a promise', () => {
    // Act
    const promise = studentAPI.getTOCByTraining(null);

    // Assert
    expect(promise).to.be.an.instanceOf(Promise);
  });

  it('should return a "TrainingTOC" instance if id exists', (done) => {
    // Arrange
    const trainingId = 1;
    const trainingList: TrainingTOC[] = [
      {
        id: 1,
        content: 'Content of TOC from training 1',
      },
    ];
    studentAPI.setMockedTrainings(trainingList);

    // Act
    studentAPI.getTOCByTraining(trainingId).then((trainingTOC) => {
      // Assert
      expect(trainingTOC).to.be.a('string').and.be.equals('Content of TOC from training 1');
      done();
    }).catch(done);
  });

  it('should return "undefined" for a non existing id', (done) => {
    // Arrange
    const trainingId = null;

    // Act
    studentAPI.getTOCByTraining(trainingId).then((trainingTOC) => {
      // Assert
      expect(trainingTOC).to.be.undefined;
      done();
    }).catch(done);
  });
});
