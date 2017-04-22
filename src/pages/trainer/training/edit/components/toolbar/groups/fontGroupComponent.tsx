import * as React from 'react';
import {ToolbarMarkdownButton} from '../buttons';
import {Icon, iconEnums} from '../icons';
import {IMarkdownEntry} from '../../../../../../../model/trainer/markdownEntry';
import {markdownEntryConstants} from '../../markdownEntryConstants';

interface IProps {
  insertMarkdownEntry: (markdownEntry: IMarkdownEntry) => void;
}

export const FontGroupComponent = (props: IProps) => {
  return (
      <div className="btn-group">
        <ToolbarMarkdownButton
          mdCaret={markdownEntryConstants.header.mdCaret}
          caretCursorPosition={markdownEntryConstants.header.cursorPosition}
          onClick={props.insertMarkdownEntry}
        >
          <Icon icon={iconEnums.header} />
        </ToolbarMarkdownButton>
        <ToolbarMarkdownButton
          mdCaret={markdownEntryConstants.bold.mdCaret}
          caretCursorPosition={markdownEntryConstants.bold.cursorPosition}
          onClick={props.insertMarkdownEntry}
        >
          <Icon icon={iconEnums.bold} />
        </ToolbarMarkdownButton>
        <ToolbarMarkdownButton
          mdCaret={markdownEntryConstants.italic.mdCaret}
          caretCursorPosition={markdownEntryConstants.italic.cursorPosition}
          onClick={props.insertMarkdownEntry}
        >
          <Icon icon={iconEnums.italic} />
        </ToolbarMarkdownButton>
      </div>
  );
};
