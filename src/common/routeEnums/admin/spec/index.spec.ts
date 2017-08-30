import {adminRouteEnums} from '../index';

describe('adminRouteEnums', () => {
  it('should be defined', () => {
    expect(adminRouteEnums).not.to.be.undefined;
  });

  it('should have keys defined', () => {
    expect(adminRouteEnums.default).to.be.equals('/admin');
    expect(adminRouteEnums.student.list).to.be.equals('/admin/student/list');
    expect(adminRouteEnums.student.edit).to.be.equals('/admin/student/:id/edit');
    expect(adminRouteEnums.training.list).to.be.equals('/admin/training/list');
    expect(adminRouteEnums.training.edit).to.be.equals('/admin/training/edit');
  });
});
