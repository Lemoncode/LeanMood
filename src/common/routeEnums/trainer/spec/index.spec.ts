import {trainerRouteEnums} from '../index';

describe('trainerRouteEnums', () => {
  it('should be defined', () => {
    expect(trainerRouteEnums).not.to.be.undefined;
  });

  it('should have keys defined', () => {
    expect(trainerRouteEnums.default).to.be.equals('/trainer');
    expect(trainerRouteEnums.dashboard).to.be.equals('/trainer/dashboard');
    expect(trainerRouteEnums.evaluation).to.be.equals('/trainer/evaluation');
    expect(trainerRouteEnums.training.edit).to.be.equals('/trainer/training/edit');
  });
});
