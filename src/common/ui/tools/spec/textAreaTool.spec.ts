import {textAreaTool} from '../textAreaTool';

describe('textAreaTool', () => {
  describe('insertAtCaretGetText', () => {
    it('is defined', () => {
      // Assert
      expect(textAreaTool).not.to.be.undefined;
    });

    it('returns empty string passing textArea value and caret equals empty and offsetCursor equals 0', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      textArea.value = '';
      const caret = '';
      const offsetCursor = 0;

      // Act
      const result = textAreaTool.insertAtCaretGetText(textArea, caret, offsetCursor);

      // Assert
      expect(result).to.equal('');
    });

    it('returns expected string passing textArea equal test, caret equals * and offsetCursor equals 0', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      textArea.value = 'test';
      textArea.selectionStart = 0;
      textArea.selectionEnd = 0;
      const caret = '*';
      const offsetCursor = 0;

      // Act
      const result = textAreaTool.insertAtCaretGetText(textArea, caret, offsetCursor);

      // Assert
      expect(result).to.equal('*test');
    });

    it('returns expected string passing textArea equal test, caret equals ** and offsetCursor equals 0 ' +
      'and there is no selected text', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      textArea.value = 'test';
      textArea.selectionStart = 0;
      textArea.selectionEnd = 0;
      const caret = '**';
      const offsetCursor = 0;

      // Act
      const result = textAreaTool.insertAtCaretGetText(textArea, caret, offsetCursor);

      // Assert
      expect(result).to.equal('**test');
    });

    it('returns expected string passing textArea equal test, caret equals ** and offsetCursor equals 0 ' +
      'and there is selected text', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      textArea.value = 'test';
      textArea.selectionStart = 1;
      textArea.selectionEnd = 2;
      const caret = '**';
      const offsetCursor = 0;

      // Act
      const result = textAreaTool.insertAtCaretGetText(textArea, caret, offsetCursor);

      // Assert
      expect(result).to.equal('te**st');
    });

    it('returns expected string passing textArea equal test, caret equals ** and offsetCursor equals 1 ' +
      'and there is selected text', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      textArea.value = 'test';
      textArea.selectionStart = 1;
      textArea.selectionEnd = 2;
      const caret = '**';
      const offsetCursor = 1;

      // Act
      const result = textAreaTool.insertAtCaretGetText(textArea, caret, offsetCursor);

      // Assert
      expect(result).to.equal('t*e*st');
    });
  });


  describe('placeCursor', () => {
    it('is defined', () => {
      // Assert
      expect(textAreaTool.placeCursor).not.to.be.undefined;
    });

    it('place cursor to selectionStart equals 0 and selectionEnd equals 0 and calls to focus ' +
      'when we passing selectionStart and selectionEnd equals undefined', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      const selectionStart = undefined;
      const selectionEnd = undefined;

      const textAreaFocusSpy = textArea.focus = sinon.spy();

      // Act
      textAreaTool.placeCursor(textArea, selectionStart, selectionEnd);

      // Assert
      expect(textArea.selectionStart).to.equals(0);
      expect(textArea.selectionEnd).to.equals(0);
      expect(textAreaFocusSpy.calledOnce).to.be.true;
    });

    it('place cursor to selectionStart equals 0 and selectionEnd equals 0 and calls to focus ' +
      'when we passing selectionStart and selectionEnd equals null', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      const selectionStart = null;
      const selectionEnd = null;

      const textAreaFocusSpy = textArea.focus = sinon.spy();

      // Act
      textAreaTool.placeCursor(textArea, selectionStart, selectionEnd);

      // Assert
      expect(textArea.selectionStart).to.equals(0);
      expect(textArea.selectionEnd).to.equals(0);
      expect(textAreaFocusSpy.calledOnce).to.be.true;
    });

    it('place cursor to selectionStart equals 1 and selectionEnd equals 1 and calls to focus ' +
      'when we passing selectionStart equals 1 and selectionEnd equals undefined', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      const selectionStart = 1;
      const selectionEnd = undefined;

      const textAreaFocusSpy = textArea.focus = sinon.spy();

      // Act
      textAreaTool.placeCursor(textArea, selectionStart, selectionEnd);

      // Assert
      expect(textArea.selectionStart).to.equals(1);
      expect(textArea.selectionEnd).to.equals(1);
      expect(textAreaFocusSpy.calledOnce).to.be.true;
    });

    it('place cursor to selectionStart equals 1 and selectionEnd equals 1 and calls to focus ' +
      'when we passing selectionStart equals 1 and selectionEnd equals null', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      const selectionStart = 1;
      const selectionEnd = null;

      const textAreaFocusSpy = textArea.focus = sinon.spy();

      // Act
      textAreaTool.placeCursor(textArea, selectionStart, selectionEnd);

      // Assert
      expect(textArea.selectionStart).to.equals(1);
      expect(textArea.selectionEnd).to.equals(1);
      expect(textAreaFocusSpy.calledOnce).to.be.true;
    });
  });

  describe('hasSelectedText', () => {
    it('is defined', () => {
      // Assert
      expect(textAreaTool.hasSelectedText).not.to.be.undefined;
    });

    it('returns false when selectionStart and selectionEnd equals 0', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      textArea.value = '';
      textArea.selectionStart = 0;
      textArea.selectionEnd = 0;

      // Act
      const result = textAreaTool.hasSelectedText(textArea);

      // Assert
      expect(result).to.be.false;
    });

    it('returns false when selectionStart and selectionEnd equals 1', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      textArea.value = 'a';
      textArea.selectionStart = 1;
      textArea.selectionEnd = 1;

      // Act
      const result = textAreaTool.hasSelectedText(textArea);

      // Assert
      expect(result).to.be.false;
    });

    it('returns false when selectionStart equals 0 and selectionEnd equals 1', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      textArea.value = 'a';
      textArea.selectionStart = 0;
      textArea.selectionEnd = 1;

      // Act
      const result = textAreaTool.hasSelectedText(textArea);

      // Assert
      expect(result).to.be.true;
    });
  });

  describe('calculateStartCursorPositionPlusOffset', () => {
    it('is defined', () => {
      // Assert
      expect(textAreaTool.calculateStartCursorPositionPlusOffset).not.to.be.undefined;
    });

    it('returns 0 when selectionStart and offsetCursor equals 0', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      textArea.value = '';
      textArea.selectionStart = 0;

      const offsetCursor = 0;

      // Act
      const result = textAreaTool.calculateStartCursorPositionPlusOffset(textArea, offsetCursor);

      // Assert
      expect(result).to.equals(0);
    });

    it('returns 1 when selectionStart equals 1 and offsetCursor equals 0', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      textArea.value = 'a';
      textArea.selectionStart = 1;

      const offsetCursor = 0;

      // Act
      const result = textAreaTool.calculateStartCursorPositionPlusOffset(textArea, offsetCursor);

      // Assert
      expect(result).to.equals(1);
    });

    it('returns 2 when selectionStart equals 1 and offsetCursor equals 1', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      textArea.value = 'a';
      textArea.selectionStart = 1;

      const offsetCursor = 1;

      // Act
      const result = textAreaTool.calculateStartCursorPositionPlusOffset(textArea, offsetCursor);

      // Assert
      expect(result).to.equals(2);
    });

    it('returns 0 when selectionStart equals 1 and offsetCursor equals -1', () => {
      // Arrange
      const wrapper = cheerio.load('<textarea></textarea>');
      const textArea = wrapper('textarea') as HTMLTextAreaElement;
      textArea.value = 'a';
      textArea.selectionStart = 1;

      const offsetCursor = -1;

      // Act
      const result = textAreaTool.calculateStartCursorPositionPlusOffset(textArea, offsetCursor);

      // Assert
      expect(result).to.equals(0);
    });
  });
});
