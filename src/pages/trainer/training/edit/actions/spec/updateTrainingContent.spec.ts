import * as cheerio from 'cheerio';
import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {textAreaTool} from '../../../../../../common/ui/tools/textAreaTool';
import {updateTrainingContentAction} from '../updateTrainingContent';

describe('updateTrainingContentAction', () => {
  it('should be defined', () => {
    // Assert
    expect(updateTrainingContentAction).not.to.be.undefined;
  });

  it('returns expected type equals UPDATE_TRAINING_CONTENT', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const textAreaToolStub = sinon.stub(textAreaTool,
    'insertAtCaretGetText', () => {
      return '';
    });
    // Act
    const actionResult = updateTrainingContentAction(null, null, null);

    // Assert
    expect(actionResult.type).to.equal(trainerActionEnums.UPDATE_TRAINING_CONTENT);
  }).bind(this));

  it('returns expected payload equals expected content and calls to insertAtCaretGetText', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const wrapper = cheerio.load('<textarea></textarea>');
    const textArea = wrapper('textarea') as HTMLTextAreaElement;
    textArea.value = 'Test content';
    const caret = '**';
    const offset = 0;

    const expectedContent = '*Test content*';

    const textAreaToolStub = sinon.stub(textAreaTool,
    'insertAtCaretGetText', () => {
      return expectedContent;
    });

    // Act
    const actionResult = updateTrainingContentAction(textArea, caret, offset);

    // Assert
    expect(actionResult.payload).to.equal(expectedContent);
    expect(textAreaToolStub.calledWith(textArea, caret, offset));
  }).bind(this));
});
