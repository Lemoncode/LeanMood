import {studentRouteEnums} from '../index';

describe('studentRouteEnums', () => {
  it('should be defined', () => {
    expect(studentRouteEnums).not.to.be.undefined;
  });

  it('should have keys defined', () => {
    expect(studentRouteEnums.default).to.be.equals('/student');
    expect(studentRouteEnums.training).to.be.equals('/student/training');
  });
});
