import { deepFreezeSkipDate } from  '../deepfreeze';

describe('deepFreezeSkipDate', () => {
  it('is defined', () => {
    // Arrange
    // Act
    // Assert
    expect(deepFreezeSkipDate).not.to.be.undefined;
  });

  it('throws exception when object property is not frozen (one level)', () => {
    // Arrange
    let numbers: Number[] = [3, 4, 5];
    deepFreezeSkipDate(numbers);
    // Act
    // Assert
    expect(() => numbers.push(6)).to.throw();
  });

  it('doesnt throw any exception when the object keeps immutable', () => {
    // Arrange
    const numbers: Number[] = [3, 4, 5];
    deepFreezeSkipDate(numbers);
    // Act
    const newState = [...numbers, 6]
    // Assert
    // immutable should not throw exception
  });

  it('skip a date object check for immutability', () => {
    // Arrange
    const myDate =  new Date();
    deepFreezeSkipDate(myDate);
    // Act
    myDate.setHours(1, 30, 0);
    // Assert
    // immutable should not throw exception
  });

  it('throws exception when nested object is not immutable', () => {
    // Arrange
    const myObject = {
        name: 'john',
        numbers: [3, 4, 5]
    };

    deepFreezeSkipDate(myObject);
    // Act
    // Assert
    expect(() => myObject.numbers.push(6)).to.throw();
  });

  it('doesnt throw exception when nested date object is not immutable', () => {
    // Arrange
    const myObject = {
        name: 'john',
        myDate:  new Date()
    };

    deepFreezeSkipDate(myObject);
    // Act
    myObject.myDate.setHours(1, 30, 0);

    // Assert
    // No throw
  });


});
