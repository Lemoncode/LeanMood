import { getSizeByPercentage } from '../getSizeByPercentage';

describe('getSizeByPercentage', () => {
  it('should return a number', () => {
    // Arrange
    const width = 1;
    const percentage = 1;

    // Act
    const result = getSizeByPercentage(width, percentage);

    // Assert
    expect(result).to.be.a('number');
  });

  it('should return 0 for width equals 0', () => {
    // Arrange
    const width = 0;
    const percentage = 1;

    // Act
    const result = getSizeByPercentage(width, percentage);

    // Assert
    expect(result).to.be.equals(0);
  });

  it('should return 0 for percentage equals 0', () => {
    // Arrange
    const width = 200;
    const percentage = 0;

    // Act
    const result = getSizeByPercentage(width, percentage);

    // Assert
    expect(result).to.be.equals(0);
  });

  it('should return the expected percentage', () => {
    // Arrange
    const width = 200;
    const percentage = 20;

    // Act
    const result = getSizeByPercentage(width, percentage);

    // Assert
    expect(result).to.be.equals(40);
  });
});
