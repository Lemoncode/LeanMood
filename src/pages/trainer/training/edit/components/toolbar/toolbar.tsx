import * as React from 'react';
import {ToolbarMarkdownButton} from './buttons';
import {Icon, iconEnums} from './icons';
import {IMarkdownEntry} from '../../../../../../model/trainer/markdownEntry';
import {markdownEntryConstants} from '../markdownEntryConstants';
import { FontGroupComponent } from './groups';

interface IProps {
  insertMarkdownEntry: (markdownEntry: IMarkdownEntry) => void;
}

export const ToolbarComponent = (props: IProps) => {
  return (
    <div className="btn-toolbar">
      
      <FontGroupComponent insertMarkdownEntry={props.insertMarkdownEntry}/>

      <div className="btn-group">
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
    </div>
  );
};
