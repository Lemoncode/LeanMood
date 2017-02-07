import {validationsEnums} from '../validationEnums';

describe('validationEnums', () => {
  it('should be defined', () => {
    // Assert
    expect(validationsEnums).not.to.be.undefined;
  });

  it('should have keys defined and field / value match', () => {
    // Assert
    expect(validationsEnums.REQUIRED.FIELD.TYPE).to.equal('REQUIRED_FIELD');
    expect(validationsEnums.REQUIRED.FIELD.MESSAGE).to.equal('Mandatory field');
  });
});
