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
          onClick={props.updateTextArea.bind(this)}
        >
          <HeaderIcon />
        </ToolbarButton>
        <ToolbarButton
          textArea={props.textArea}
          caret="****"
          offset={2}
          onClick={props.updateTextArea.bind(this)}
        >
          <BoldIcon />
        </ToolbarButton>
        <ToolbarButton
          textArea={props.textArea}
          caret="**"
          offset={1}
          onClick={props.updateTextArea.bind(this)}
        >
          <ItalicIcon />
        </ToolbarButton>
      </div>
      <div className="btn-group">
        <ToolbarButton
          textArea={props.textArea}
          caret="``"
          offset={1}
          onClick={props.updateTextArea.bind(this)}
        >
          <CodeIcon />
        </ToolbarButton>
        <ToolbarButton
          textArea={props.textArea}
          caret="[](url)"
          offset={1}
          onClick={props.updateTextArea.bind(this)}
        >
          <LinkIcon />
        </ToolbarButton>
        <ToolbarButton
          textArea={props.textArea}
          caret="![alt text]()"
          offset={12}
          onClick={props.updateTextArea.bind(this)}
        >
          <ImageIcon />
        </ToolbarButton>
      </div>
      <div className="btn-group">
        <ToolbarButton
          textArea={props.textArea}
          caret="\n - "
          offset={4}
          onClick={props.updateTextArea.bind(this)}
        >
          <BulletedListIcon />
        </ToolbarButton>
        <ToolbarButton
          textArea={props.textArea}
          caret="\n 1. "
          offset={5}
          onClick={props.updateTextArea.bind(this)}
        >
          <NumberedListIcon />
        </ToolbarButton>
        <ToolbarButton
          textArea={props.textArea}
          caret="> "
          offset={2}
          onClick={props.updateTextArea.bind(this)}
        >
          <QuoteIcon />
        </ToolbarButton>
      </div>
    </div>
  );
};
