import { studentActionEnums } from '../';

describe('studentActionEnums', () => {
  it('should be an object', () => {
    // Assert
    expect(studentActionEnums).to.be.an('object').not.null;
  });

  it('should have keys defined', () => {
    // Assert
    expect(studentActionEnums.FETCH_TRAINING_TOC_COMPLETED).to.be.equals('STUDENT_MODULE/FETCH_TRAINING_TOC_COMPLETED');
    expect(studentActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED)
      .to.be.equals('STUDENT_MODULE/GET_SUMMARY_TRAINING_REQUEST_COMPLETED');
  });
});
