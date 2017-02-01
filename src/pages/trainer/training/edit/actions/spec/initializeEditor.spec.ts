import * as cheerio from 'cheerio';
import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {initializeEditorAction} from '../initializeEditor';

describe('initializeEditorAction', () => {
  it('should be defined', () => {
    // Assert
    expect(initializeEditorAction).not.to.be.undefined;
  });

  it('returns expected type equals INITIALIZE_EDITOR', () => {
    // Arrange

    // Act
    const actionResult = initializeEditorAction(null);

    // Assert
    expect(actionResult.type).to.equal(trainerActionEnums.INITIALIZE_EDITOR);
  });

  it('returns expected payload equals editor', () => {
    // Arrange
    const wrapper = cheerio.load('<textarea></textarea>');
    const expectedEditor = wrapper('textarea') as HTMLTextAreaElement;
    expectedEditor.value = 'Test value';

    // Act
    const actionResult = initializeEditorAction(expectedEditor);

    // Assert
    expect(actionResult.payload).to.equal(expectedEditor);
    expect(actionResult.payload.value).to.equal(expectedEditor.value);
  });
});
