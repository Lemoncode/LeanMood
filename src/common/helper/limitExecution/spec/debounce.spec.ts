import { debounce } from '../debounce';

describe('debounce', () => {
  it('should return a function', () => {
    // Arrange
    const f = (x) => 2 * x;

    // Act
    const df = debounce(f, 0);

    // Assert
    expect(df).to.be.a('function');
  });

  it('should return the original function', () => {
    // Arrange
    function f(x) { return 2 * x; };

    // Act
    const df = debounce(f, 0);
    const result = df(2);

    // Assert
    expect(result).to.be.equals(4);
  });

  it('should prevents function calls whithin the threshold', () => {
    // Arrange
    const f = (x) => 2 * x;

    // Act
    const df = debounce(f, 10);
    const firstCallResult = df(2);
    const secondCallResult = df(4);

    // Assert
    expect(firstCallResult).to.be.equals(4);
    expect(secondCallResult).to.be.undefined;
  });

  it('should allow function calls outside the threshold', async function() {
    // Arrange
    const f = (x) => 2 * x;
    const sleep = (ms) => (new Promise((resolve) => setTimeout(resolve, ms)));

    // Act
    const df = debounce(f, 10);
    const firstCallResult = df(2);
    await sleep(15);
    const secondCallResult = df(4);

    // Assert
    expect(firstCallResult).to.be.equals(4);
    expect(secondCallResult).to.be.equals(8);
  });
});
