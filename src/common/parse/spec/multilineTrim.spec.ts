import {multilineTrim} from '../multilineTrim';

describe('MultilineTrim', () => {
  it('is defined', () =>{
    //Arrange
    //Act
    //Assert
    expect(multilineTrim).not.to.be.undefined;
  });

  it ('should return a string', () => {
    //Arrange
    const string = '';
    //Act
    //Assert
    expect(multilineTrim(string)).to.be.a('string');
  });

  it('should trim new lines', () => {
    //Arrange
    const string = `
    <tr>
      <td>Hi</td>
      <td>Hello</td>
      <td>Arr!!</td>
    </tr>
    `;
    //Act
    //Assert
    expect(multilineTrim(string)).to.be.equals('<tr><td>Hi</td><td>Hello</td><td>Arr!!</td></tr>');
  });

  it('should preserve spaces inside lines', () => {
    //Arrange
    const string = `
    <tr>
      <td>John Doe</td>
      <td>Mark Flow</td>
    </tr>
    `;
    //Act
    //Assert
    expect(multilineTrim(string)).to.be.equals('<tr><td>John Doe</td><td>Mark Flow</td></tr>');
  });

  it('if empty line', () => {
    //Arrange
    const string = ``;
    //Act
    //Assert
    expect(multilineTrim(string)).to.be.equals('');
  });
});
