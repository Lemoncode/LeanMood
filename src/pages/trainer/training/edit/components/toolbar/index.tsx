import * as React from 'react';
import {ToolbarButton} from './buttons';
import {
  HeaderIcon, BoldIcon, ItalicIcon, CodeIcon, LinkIcon, ImageIcon,
  BulletedListIcon, NumberedListIcon, QuoteIcon,
} from './icons';

interface IProps {
  textArea: HTMLTextAreaElement;
  updateTextArea: (textArea: HTMLTextAreaElement, caret: string, offset: number) => void;
}

export const ToolbarComponent = (props: IProps) => {
  return (
    <div className="btn-toolbar">
      <div className="btn-group">
        <ToolbarButton
          textArea={props.textArea}
          caret="# "
          offset={1}
          onClick={props.updateTextArea}
        >
          <HeaderIcon />
        </ToolbarButton>
        <ToolbarButton
          textArea={props.textArea}
          caret="****"
          offset={2}
          onClick={props.updateTextArea}
        >
          <BoldIcon />
        </ToolbarButton>
        <ToolbarButton
          textArea={props.textArea}
          caret="**"
          offset={1}
          onClick={props.updateTextArea}
        >
          <ItalicIcon />
        </ToolbarButton>
      </div>
      <div className="btn-group">
        <ToolbarButton
          textArea={props.textArea}
          caret="``"
          offset={1}
          onClick={props.updateTextArea}
        >
          <CodeIcon />
        </ToolbarButton>
        <ToolbarButton
          textArea={props.textArea}
          caret="[](url)"
          offset={1}
          onClick={props.updateTextArea}
        >
          <LinkIcon />
        </ToolbarButton>
        <ToolbarButton
          textArea={props.textArea}
          caret="![alt text]()"
          offset={12}
          onClick={props.updateTextArea}
        >
          <ImageIcon />
        </ToolbarButton>
      </div>
      <div className="btn-group">
        <ToolbarButton
          textArea={props.textArea}
          caret="\n - "
          offset={4}
          onClick={props.updateTextArea}
        >
          <BulletedListIcon />
        </ToolbarButton>
        <ToolbarButton
          textArea={props.textArea}
          caret="\n 1. "
          offset={5}
          onClick={props.updateTextArea}
        >
          <NumberedListIcon />
        </ToolbarButton>
        <ToolbarButton
          textArea={props.textArea}
          caret="> "
          offset={2}
          onClick={props.updateTextArea}
        >
          <QuoteIcon />
        </ToolbarButton>
      </div>
    </div>
  );
};
