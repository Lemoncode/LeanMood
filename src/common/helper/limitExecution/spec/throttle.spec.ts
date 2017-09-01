import { throttle } from '../throttle';

describe('throttle', () => {
  it('should return a function', () => {
    // Arrange
    const f = () => 0;

    // Act
    const tf = throttle(f, 0);

    // Assert
    expect(tf).to.be.a('function');
  });

  it('should prevent function calls within the threshold', () => {
    // Arrange
    let result = 0;
    const f = (x) => result = 2 * x;

    // Act
    const tf = throttle(f, 10);
    tf(1);
    tf(2);
    tf(3);

    // Assert
    expect(result).to.be.equals(0);
  });

  it('should trigger the first received function call once the threshold is over', function() {
    // Arrange
    let result = 0;
    const f = (x) => result = 2 * x;
    const delay = (ms) => (new Promise((resolve) => setTimeout(resolve, ms)));

    // Act
    const tf = throttle(f, 10);
    tf(1);
    tf(2);
    tf(3);

    // Assert
    expect(result).to.be.equals(0);
    return delay(11).then(() => {
      expect(result).to.be.equals(2);
    });
  });
});
