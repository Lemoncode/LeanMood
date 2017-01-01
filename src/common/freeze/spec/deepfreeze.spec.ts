import { deepFreezeSkipDate } from  '../deepfreeze';

describe.only('deepFreezeSkipDate', () => {
  it('is defined', () => {
    // Arrange
    // Act
    // Assert
    expect(deepFreezeSkipDate).not.to.be.undefined;
  });

  it('throws exception when object property is not frozen (one level)', () => {
    // Arrange
    const numbers: Number[] = [3, 4, 5];
    deepFreezeSkipDate(numbers);
    // Act
    // Assert
    expect(numbers.push.bind(numbers, 6)).to.throw('Attempted to assign to readonly property.');
  });

  it('doesnt throw any exception when the object keeps immutable', () => {
    // Arrange
    const numbers: Number[] = [3, 4, 5];
    deepFreezeSkipDate(numbers);
    // Act
    const newState = [...numbers, 6]
    // Assert
  });

  // Pending case: check Date and skips
  // Pending case: Nested structures all the case
});
