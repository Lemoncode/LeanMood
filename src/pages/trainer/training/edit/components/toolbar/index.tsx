import * as React from 'react';
import {ToolbarButton} from './buttons';
import {
  HeaderIcon, BoldIcon, ItalicIcon, CodeIcon, LinkIcon, ImageIcon,
  BulletedListIcon, NumberedListIcon, QuoteIcon
} from './icons';

interface Props {
  textArea: HTMLTextAreaElement;
  updateTextArea: (textArea: HTMLTextAreaElement, caret: string, offset: number) => void;
}

export const ToolbarComponent = (props: Props) => {
  return (
    <div className="btn-toolbar">
      <div className="btn-group">
        <ToolbarButton textArea={props.textArea} caret="# " offset={1}
          onClick={props.updateTextArea.bind(this)}>
          <HeaderIcon />
        </ToolbarButton>
      </div>
    </div>
  );
}
