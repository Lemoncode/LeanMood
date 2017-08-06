import { TrainingTOC } from '../trainingToc';

describe('Student Module: TrainingTOC', () => {
  let trainingTOC: TrainingTOC = null;

  beforeEach(() => {
    trainingTOC = new TrainingTOC();
  });

  it('should be an instance of TrainingTOC', () => {
    // Assert
    expect(trainingTOC).to.be.an.instanceOf(TrainingTOC);
  });

  it('should have a property "id" initialized being an empty string', () => {
    // Assert
    expect(trainingTOC.id).to.be.a('string').with.lengthOf(0);
  });

  it('should have a property "content" initialized being an empty string', () => {
    // Assert
    expect(trainingTOC.content).to.be.a('string').with.lengthOf(0);
  });
});
