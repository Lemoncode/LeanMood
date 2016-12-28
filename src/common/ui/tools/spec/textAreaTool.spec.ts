import {textAreaTool} from '../textAreaTool';
import {shallow} from 'enzyme';

describe('textAreaTool', () => {
  describe('insertAtCaretGetText', () => {
    it('is defined', () => {
      //Assert
      expect(textAreaTool).not.to.be.undefined;
    });

    it('returns empty string passing textArea and caret equals empty', () => {
      //Arrange
      const textArea = document.createElement("TEXTAREA") as HTMLTextAreaElement;
      textArea.value = ''
      const caret = '';
      const offsetCursor = 0;

      //Act
      const result = textAreaTool.insertAtCaretGetText(textArea, caret, offsetCursor)

      //Assert
      expect(result).to.equal('');
    });
  });
});
