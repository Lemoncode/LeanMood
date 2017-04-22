import * as React from 'react';
import { ToolbarLabeledMarkdownButton } from '../buttons';
import {Icon, iconEnums} from '../icons';
import {IMarkdownEntry} from '../../../../../../../model/trainer/markdownEntry';
import {markdownEntryConstants} from '../../markdownEntryConstants';
const classNames: any = require('./groupStyles.scss');

interface IProps {
  insertMarkdownEntry: (markdownEntry: IMarkdownEntry) => void;
}

export const CommandGroupComponent = (props: IProps) => {
  return (
      <div className={classNames.container}>
        <ToolbarLabeledMarkdownButton
          mdCaret={markdownEntryConstants.header.mdCaret}
          caretCursorPosition={markdownEntryConstants.header.cursorPosition}
          onClick={props.insertMarkdownEntry}
          label="Upload File"
        >
          <Icon icon={iconEnums.upload} />
        </ToolbarLabeledMarkdownButton>

        <ToolbarLabeledMarkdownButton
          mdCaret={markdownEntryConstants.header.mdCaret}
          caretCursorPosition={markdownEntryConstants.header.cursorPosition}
          onClick={props.insertMarkdownEntry}
          label="Add Evaluation"
        >
          <Icon icon={iconEnums.evaluation} />
        </ToolbarLabeledMarkdownButton>
        
      </div>
  );
};
