import { studentRouteEnums } from '../index';

describe('studentRouteEnums', () => {
  it('should be an object', () => {
    // Assert
    expect(studentRouteEnums).to.be.an('object').not.null;
  });

  it('should have routes defined', () => {
    expect(studentRouteEnums.default).to.be.equals('/student');
    expect(studentRouteEnums.training.base).to.be.equals('/student/training');
    expect(studentRouteEnums.training.list).to.be.equals('/student/training/list');
    expect(studentRouteEnums.training.id.base).to.be.equals('/student/training/:trainingId');
    expect(studentRouteEnums.training.id.toc).to.be.equals('/student/training/:trainingId/toc');
  });
});
