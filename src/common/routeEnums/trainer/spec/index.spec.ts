import {trainerRouteEnums} from '../index';

describe('trainerRouteEnums', () => {
  it('should be an object', () => {
    expect(trainerRouteEnums).to.be.an('object').that.is.not.null;
  });

  it('should have keys defined', () => {
    expect(trainerRouteEnums.default).to.be.equals('/trainer');
    expect(trainerRouteEnums.training.base).to.be.equals('/trainer/training');
    expect(trainerRouteEnums.training.byId.base).to.be.equals('/trainer/training/:trainingId');
    expect(trainerRouteEnums.training.byId.dashboard).to.be.equals('/trainer/training/:trainingId/dashboard');
    expect(trainerRouteEnums.training.byId.edit).to.be.equals('/trainer/training/:trainingId/edit');
    expect(trainerRouteEnums.training.byId.evaluation).to.be.equals('/trainer/training/:trainingId/evaluation');
  });
});
