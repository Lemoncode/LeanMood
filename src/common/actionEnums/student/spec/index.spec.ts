import { studentActionEnums } from '../';

describe('studentActionEnums', () => {
  it('should be an object', () => {
    // Assert
    expect(studentActionEnums).to.be.an('object').not.null;
  });

  it('should have a FETCH_TRAINING_TOC action', () => {
    // Assert
    expect(studentActionEnums.FETCH_TRAINING_TOC_COMPLETED).to.be.equals('STUDENT_FETCH_TRAINING_TOC_COMPLETED');
  });
});
