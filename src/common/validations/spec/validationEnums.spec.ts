import {validationsEnums} from '../validationEnums';

describe('validationEnums', () => {
  it('should be an object', () => {
    // Assert
    expect(validationsEnums).to.be.an('object').not.null;
  });
});
