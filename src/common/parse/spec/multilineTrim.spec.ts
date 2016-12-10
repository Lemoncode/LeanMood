import {multilineTrim} from '../multilineTrim';

describe('MultilineTrim', () => {
    it('is defined', () =>{
        //Arrange
        //Act
        //Assert
        expect(multilineTrim).not.to.be.undefined;
    });



    it ('should return a string', () => {
        const string = '';
        expect(multilineTrim(string)).to.be.a('string');
    });

    it('should trim new lines', () => {
        const string = `
        <tr>
            <td>Hi</td>
            <td>Hello</td>
            <td>Arr!!</td>
        </tr>
        `;
        expect(multilineTrim(string)).to.be.equals('<tr><td>Hi</td><td>Hello</td><td>Arr!!</td></tr>');
    });

    it('should preserve spaces inside lines', () => {
        const string = `
        <tr>
            <td>John Doe</td>
            <td>Mark Flow</td>
        </tr>
        `;
        expect(multilineTrim(string)).to.be.equals('<tr><td>John Doe</td><td>Mark Flow</td></tr>');
  });
});