import * as React from 'react';
import {ToolbarMarkdownButton} from '../buttons';
import {Icon, iconEnums} from '../icons';
import {IMarkdownEntry} from '../../../../../../../model/trainer/markdownEntry';
import {markdownEntryConstants} from '../../markdownEntryConstants';
const classNames: any = require('./groupStyles.scss');

interface IProps {
  insertMarkdownEntry: (markdownEntry: IMarkdownEntry) => void;
}

export const LinksGroupComponent = (props: IProps) => {
  return (
      <div className={`btn-group ${classNames.itemLinks}`}>
        <ToolbarMarkdownButton
          mdCaret={markdownEntryConstants.code.mdCaret}
          caretCursorPosition={markdownEntryConstants.code.cursorPosition}
          onClick={props.insertMarkdownEntry}
        >
          <Icon icon={iconEnums.code} />
        </ToolbarMarkdownButton>
        <ToolbarMarkdownButton
          mdCaret={markdownEntryConstants.link.mdCaret}
          caretCursorPosition={markdownEntryConstants.link.cursorPosition}
          onClick={props.insertMarkdownEntry}
        >
          <Icon icon={iconEnums.link} />
        </ToolbarMarkdownButton>
        <ToolbarMarkdownButton
          mdCaret={markdownEntryConstants.image.mdCaret}
          caretCursorPosition={markdownEntryConstants.image.cursorPosition}
          onClick={props.insertMarkdownEntry}
        >
          <Icon icon={iconEnums.image} />
        </ToolbarMarkdownButton>        
      </div>
  );
};
