import * as React from 'react';
import {ToolbarMarkdownButton} from '../buttons';
import {Icon, iconEnums} from '../icons';
import {IMarkdownEntry} from '../../../../../../../model/trainer/markdownEntry';
import {markdownEntryConstants} from '../../markdownEntryConstants';

interface IProps {
  insertMarkdownEntry: (markdownEntry: IMarkdownEntry) => void;
}

export const ListGroupComponent = (props: IProps) => {
  return (
      <div className="btn-group">
        <ToolbarMarkdownButton
          mdCaret={markdownEntryConstants.bulletedList.mdCaret}
          caretCursorPosition={markdownEntryConstants.bulletedList.cursorPosition}
          onClick={props.insertMarkdownEntry}
        >
          <Icon icon={iconEnums.bulletedList} />
        </ToolbarMarkdownButton>
        <ToolbarMarkdownButton
          mdCaret={markdownEntryConstants.numberedList.mdCaret}
          caretCursorPosition={markdownEntryConstants.numberedList.cursorPosition}
          onClick={props.insertMarkdownEntry}
        >
          <Icon icon={iconEnums.numberedList} />
        </ToolbarMarkdownButton>
        <ToolbarMarkdownButton
          mdCaret={markdownEntryConstants.quote.mdCaret}
          caretCursorPosition={markdownEntryConstants.quote.cursorPosition}
          onClick={props.insertMarkdownEntry}
        >
          <Icon icon={iconEnums.quote} />
        </ToolbarMarkdownButton>        
      </div>
  );
};
