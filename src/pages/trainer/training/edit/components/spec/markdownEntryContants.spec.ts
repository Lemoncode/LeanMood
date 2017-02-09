import {markdownEntryConstants} from '../markdownEntryConstants';

describe('markdownEntryConstants', () => {
  it('should be defined', () => {
    expect(markdownEntryConstants).to.be.not.undefined;
  });

  it('should have keys defined and field / value match', () => {
    expect(markdownEntryConstants.bold.mdCaret).to.equals('****');
    expect(markdownEntryConstants.bold.cursorPosition).to.equals(2);
    expect(markdownEntryConstants.bulletedList.mdCaret).to.equals('\n - ');
    expect(markdownEntryConstants.bulletedList.cursorPosition).to.equals(4);
    expect(markdownEntryConstants.code.mdCaret).to.equals('``');
    expect(markdownEntryConstants.code.cursorPosition).to.equals(1);
    expect(markdownEntryConstants.header.mdCaret).to.equals('# ');
    expect(markdownEntryConstants.header.cursorPosition).to.equals(1);
    expect(markdownEntryConstants.image.mdCaret).to.equals('![alt text]()');
    expect(markdownEntryConstants.image.cursorPosition).to.equals(12);
    expect(markdownEntryConstants.italic.mdCaret).to.equals('**');
    expect(markdownEntryConstants.italic.cursorPosition).to.equals(1);
    expect(markdownEntryConstants.link.mdCaret).to.equals('[](url)');
    expect(markdownEntryConstants.link.cursorPosition).to.equals(1);
    expect(markdownEntryConstants.numberedList.mdCaret).to.equals('\n 1. ');
    expect(markdownEntryConstants.numberedList.cursorPosition).to.equals(5);
    expect(markdownEntryConstants.quote.mdCaret).to.equals('> ');
    expect(markdownEntryConstants.quote.cursorPosition).to.equals(2);
  });
});
