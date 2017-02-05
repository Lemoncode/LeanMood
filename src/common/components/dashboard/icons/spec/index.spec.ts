import {dashboardIcons} from '../index';

describe('dashboardIcons', () => {
  it('should be defined', () => {
    expect(dashboardIcons).not.to.be.undefined;
  });

  it('should have keys defined', () => {
    expect(dashboardIcons.students).to.be.equal('fa fa-users fa-5x');
    expect(dashboardIcons.trainings).to.be.equal('fa fa-files-o fa-5x');
    expect(dashboardIcons.evaluation).to.be.equal('fa fa-star-half-o fa-5x');
  });
});
