import * as cheerio from 'cheerio';
import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {textAreaTool} from '../../../../../../common/ui/tools/textAreaTool';
import {updateEditorCursorAction} from '../updateEditorCursor';

describe('updateEditorCursorAction', () => {
  it('should be defined', () => {
    // Assert
    expect(updateEditorCursorAction).not.to.be.undefined;
  });

  it('returns expected type equals UPDATE_EDITOR_CURSOR', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const placeCursorStub = sinon.stub(textAreaTool, 'placeCursor', () => {});

    // Act
    const actionResult = updateEditorCursorAction(null, null);

    // Assert
    expect(actionResult.type).to.equal(trainerActionEnums.UPDATE_EDITOR_CURSOR);
  }).bind(this));

  it('calls to placeCursor method', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const wrapper = cheerio.load('<textarea></textarea>');
    const editor = wrapper('textarea') as HTMLTextAreaElement;
    const cursorStartPosition = 2;

    const placeCursorStub = sinon.stub(textAreaTool, 'placeCursor', () => {});

    // Act
    const actionResult = updateEditorCursorAction(editor, cursorStartPosition);

    // Assert
    expect(placeCursorStub.calledWith(editor, cursorStartPosition)).to.be.true;
  }).bind(this));
});
