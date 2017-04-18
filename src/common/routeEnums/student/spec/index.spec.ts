import { studentRouteEnums } from '../index';

describe('studentRouteEnums', () => {
  it('should be an object', () => {
    // Assert
    expect(studentRouteEnums).to.be.an('object').not.null;
  });

  it('should have routes defined', () => {
    expect(studentRouteEnums.trainingList).to.be.equals('/student/training/list');
    expect(studentRouteEnums.trainingTOC).to.be.equals('/student/training/:trainingId/toc');
  });
});
