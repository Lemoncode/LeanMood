import * as React from 'react';
import { ToolbarLabeledMarkdownButton, ToolbarLabeledButton } from '../buttons';
import {Icon, iconEnums} from '../icons';
import {IMarkdownEntry} from '../../../../../../../model/trainer/markdownEntry';
import {markdownEntryConstants} from '../../markdownEntryConstants';
import { panelIds } from '../../panels';
const classNames: any = require('./groupStyles.scss');

interface IProps {
  insertMarkdownEntry: (markdownEntry: IMarkdownEntry) => void;
  togglePreviewMode: () => void;
}

export const CommandGroupComponent = (props: IProps) => {
  return (
      <div className={classNames.verticalContainer}>
        <div className={`${classNames.horizontalContainer} ${classNames.commandRowUp}`}>
          <ToolbarLabeledMarkdownButton
            mdCaret={markdownEntryConstants.header.mdCaret}
            caretCursorPosition={markdownEntryConstants.header.cursorPosition}
            paneldId={panelIds.upload}
            onClick={props.insertMarkdownEntry}
            label="Upload File"
          >
            <Icon icon={iconEnums.upload} />
          </ToolbarLabeledMarkdownButton>

          <ToolbarLabeledMarkdownButton
            mdCaret={markdownEntryConstants.header.mdCaret}
            caretCursorPosition={markdownEntryConstants.header.cursorPosition}
            onClick={props.insertMarkdownEntry}
            paneldId={panelIds.evaluation}
            label="Add Evaluation"
          >
            <Icon icon={iconEnums.evaluation} />
          </ToolbarLabeledMarkdownButton>        
        </div>

        <div className={classNames.horizontalContainer}>
          <ToolbarLabeledMarkdownButton
            mdCaret={markdownEntryConstants.link.mdCaret}
            caretCursorPosition={markdownEntryConstants.link.cursorPosition}
            onClick={props.insertMarkdownEntry}
            paneldId={panelIds.delivery}
            label="Add Delivery asdf asdf"
          >
            <Icon icon={iconEnums.delivery} />
          </ToolbarLabeledMarkdownButton>

          <ToolbarLabeledButton
            onClick={props.togglePreviewMode}
            label="Preview"
          >
            <Icon icon={iconEnums.preview} />
          </ToolbarLabeledButton>        
        </div>        
      </div>
  );
};
