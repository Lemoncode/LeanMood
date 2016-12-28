import {textAreaTool} from '../textAreaTool';
import {shallow} from 'enzyme';

describe('textAreaTool', () => {
  describe('insertAtCaretGetText', () => {
    it('is defined', () => {
      //Assert
      expect(textAreaTool).not.to.be.undefined;
    });

    it('returns empty string passing textArea value and caret equals empty and offsetCursor equals 0', () => {
      //Arrange
      let textArea = document.createElement<"textarea">("textarea");
      textArea.value = '';
      const caret = '';
      const offsetCursor = 0;

      //Act
      const result = textAreaTool.insertAtCaretGetText(textArea, caret, offsetCursor);

      //Assert
      expect(result).to.equal('');
    });

    it('returns expected string passing textArea equal test, caret equals * and offsetCursor equals 0', () => {
      //Arrange
      let textArea = document.createElement<"textarea">("textarea");
      textArea.value = 'test';
      textArea.selectionStart = 0;
      textArea.selectionEnd = 0;
      const caret = '*';
      const offsetCursor = 0;

      //Act
      const result = textAreaTool.insertAtCaretGetText(textArea, caret, offsetCursor);

      //Assert
      expect(result).to.equal('*test');
    });

    it('returns expected string passing textArea equal test, caret equals ** and offsetCursor equals 0 ' +
      'and there is no selected text', () => {
      //Arrange
      let textArea = document.createElement<"textarea">("textarea");
      textArea.value = 'test';
      textArea.selectionStart = 0;
      textArea.selectionEnd = 0;
      const caret = '**';
      const offsetCursor = 0;

      //Act
      const result = textAreaTool.insertAtCaretGetText(textArea, caret, offsetCursor);

      //Assert
      expect(result).to.equal('**test');
    });

    it('returns expected string passing textArea equal test, caret equals ** and offsetCursor equals 0 ' +
      'and there is selected text', () => {
      //Arrange
      let textArea = document.createElement<"textarea">("textarea");
      textArea.value = 'test';
      textArea.selectionStart = 1;
      textArea.selectionEnd = 2;
      const caret = '**';
      const offsetCursor = 0;

      console.log(textArea.selectionStart);
      //Act
      const result = textAreaTool.insertAtCaretGetText(textArea, caret, offsetCursor);

      //Assert
      expect(result).to.equal('te**st');
    });

    it('returns expected string passing textArea equal test, caret equals ** and offsetCursor equals 1 ' +
      'and there is selected text', () => {
      //Arrange
      let textArea = document.createElement<"textarea">("textarea");
      textArea.value = 'test';
      textArea.selectionStart = 1;
      textArea.selectionEnd = 2;
      const caret = '**';
      const offsetCursor = 1;

      //Act
      const result = textAreaTool.insertAtCaretGetText(textArea, caret, offsetCursor);

      //Assert
      expect(result).to.equal('t*e*st');
    });
  });
});
