import {validationsEnums} from '../validationEnums';
import {requiredValidationHandler} from '../required';

describe('requiredValidationHandler', () => {
  it('should be defined', () => {
    // Assert
    expect(requiredValidationHandler).not.to.be.undefined;
  });

  it(`should returns FieldValidationResult informed`, () => {
    // Arrange
    const vm = null;
    const value = null;

    // Act
    const result = requiredValidationHandler(vm, value);

    // Assert
    expect(result.key).to.be.empty;
    expect(result.type).to.equal(validationsEnums.REQUIRED.FIELD.TYPE);
    expect(result.errorMessage).to.equal(validationsEnums.REQUIRED.FIELD.MESSAGE);
    expect(result.succeeded).to.be.false;
  });

  it(`should returns FieldValidationResult.succeeded equals false
    when passing value equals undefined`, () => {
    // Arrange
    const vm = null;
    const value = undefined;

    // Act
    const result = requiredValidationHandler(vm, value);

    // Assert
    expect(result.succeeded).to.be.false;
  });

  it(`should returns FieldValidationResult.succeeded equals false
    when passing value equals null`, () => {
    // Arrange
    const vm = null;
    const value = null;

    // Act
    const result = requiredValidationHandler(vm, value);

    // Assert
    expect(result.succeeded).to.be.false;
  });

  it(`should returns FieldValidationResult.succeeded equals true
    when passing value equals "test"`, () => {
    // Arrange
    const vm = null;
    const value = 'test';

    // Act
    const result = requiredValidationHandler(vm, value);

    // Assert
    expect(result.succeeded).to.be.true;
  });
});
