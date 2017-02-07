import * as cheerio from 'cheerio';
import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {textAreaTool} from '../../../../../../common/ui/tools/textAreaTool';
import {updateEditorAction} from '../updateEditor';

describe('updateEditorAction', () => {
  it('should be defined', () => {
    // Assert
    expect(updateEditorAction).not.to.be.undefined;
  });

  it('returns expected type equals UPDATE_EDITOR', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const insertAtCaretGetTextStub = sinon.stub(textAreaTool,
    'insertAtCaretGetText', () => {
      return '';
    });

    const calculateStartCursorPositionPlusOffsetStub = sinon.stub(textAreaTool,
    'calculateStartCursorPositionPlusOffset', () => {
      return 0;
    });

    // Act
    const actionResult = updateEditorAction(null, null, null);

    // Assert
    expect(actionResult.type).to.equal(trainerActionEnums.UPDATE_EDITOR);
  }).bind(this));

  it('returns expected payload.content equals content and calls to insertAtCaretGetText', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const wrapper = cheerio.load('<textarea></textarea>');
    const editor = wrapper('textarea') as HTMLTextAreaElement;
    editor.value = 'Test content';
    const caret = '**';
    const offset = 0;

    const expectedContent = '*Test content*';

    const textAreaToolStub = sinon.stub(textAreaTool,
    'insertAtCaretGetText', () => {
      return expectedContent;
    });

    const calculateStartCursorPositionPlusOffsetStub = sinon.stub(textAreaTool,
    'calculateStartCursorPositionPlusOffset', () => {
      return 0;
    });

    // Act
    const actionResult = updateEditorAction(editor, caret, offset);

    // Assert
    expect(actionResult.payload.content).to.equal(expectedContent);
    expect(textAreaToolStub.calledWith(editor, caret, offset));
  }).bind(this));

  it(`returns expected payload.cursorStartPosition equals cursorStartPosition and calls to
     calculateStartCursorPositionPlusOffset`,
    sinon.test(() => {
      // Arrange
      const sinon: sinon.SinonStatic = this;

      const wrapper = cheerio.load('<textarea></textarea>');
      const editor = wrapper('textarea') as HTMLTextAreaElement;
      editor.value = 'Test content';
      const caret = '**';
      const offset = 1;

      const expectedCursorStart = 5;

      const insertAtCaretGetTextStub = sinon.stub(textAreaTool,
      'insertAtCaretGetText', () => {
        return '';
      });

      const calculateStartCursorPositionPlusOffsetStub = sinon.stub(textAreaTool,
      'calculateStartCursorPositionPlusOffset', () => {
        return expectedCursorStart;
      });

      // Act
      const actionResult = updateEditorAction(editor, caret, offset);

      // Assert
      expect(actionResult.payload.cursorStartPosition).to.equal(expectedCursorStart);
      expect(calculateStartCursorPositionPlusOffsetStub.calledWith(editor, offset));
  }).bind(this));
});
