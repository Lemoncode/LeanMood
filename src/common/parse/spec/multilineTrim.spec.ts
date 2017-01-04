import {multilineTrim} from '../multilineTrim';

describe('MultilineTrim', () => {
  it('is defined', () => {
    // Arrange
    // Act
    // Assert
    expect(multilineTrim).not.to.be.undefined;
  });

  it ('should return a string', () => {
    // Arrange
    const expectedDomTree = '';
    // Act
    // Assert
    expect(multilineTrim(expectedDomTree)).to.be.a('string');
  });

  it('should trim new lines', () => {
    // Arrange
    const expectedDomTree = `
    <tr>
      <td>Hi</td>
      <td>Hello</td>
      <td>Arr!!</td>
    </tr>
    `;
    // Act
    // Assert
    expect(multilineTrim(expectedDomTree)).to.be.equals('<tr><td>Hi</td><td>Hello</td><td>Arr!!</td></tr>');
  });

  it('should preserve spaces inside lines', () => {
    // Arrange
    const expectedDomTree = `
    <tr>
      <td>John Doe</td>
      <td>Mark Flow</td>
    </tr>
    `;
    // Act
    // Assert
    expect(multilineTrim(expectedDomTree)).to.be.equals('<tr><td>John Doe</td><td>Mark Flow</td></tr>');
  });

  it('if empty line', () => {
    // Arrange
    const expected = ``;
    // Act
    // Assert
    expect(multilineTrim(expected)).to.be.equals('');
  });

  it('attributes spaces', () => {
    // Arrange
    const expectedDomTree = `
    <p style="color: black">
    </p>
    `;
    // Act
    // Assert
    expect(multilineTrim(expectedDomTree)).to.be.equals('<p style="color: black"></p>');
  });

  it('text literals', () => {
    // Arrange
    const expectedDomTree = `
    <span>
    my test with spaces
    </span>
    `;
    // Act
    // Assert
    expect(multilineTrim(expectedDomTree)).to.be.equals('<span>my test with spaces</span>');
  });

  it('spaces and white lines', () => {
    // Arrange
    const expectedDomTree = `
    <span>
    my test with spaces
    </span>
   

    <span>
    </span>
    `;
    // Act
    // Assert
    expect(multilineTrim(expectedDomTree)).to.be.equals('<span>my test with spaces</span><span></span>');
  });
});
