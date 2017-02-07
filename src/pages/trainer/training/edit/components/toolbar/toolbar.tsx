import * as React from 'react';
import {ToolbarButton} from './buttons';
import {
  HeaderIcon, BoldIcon, ItalicIcon, CodeIcon, LinkIcon, ImageIcon,
  BulletedListIcon, NumberedListIcon, QuoteIcon,
} from './icons';

interface IProps {
  editor: HTMLTextAreaElement;
  updateEditor: (editor: HTMLTextAreaElement, caret: string, offset: number) => void;
}

export const ToolbarComponent = (props: IProps) => {
  return (
    <div className="btn-toolbar">
      <div className="btn-group">
        <ToolbarButton
          editor={props.editor}
          caret="# "
          offset={1}
          onClick={props.updateEditor}
        >
          <HeaderIcon />
        </ToolbarButton>
        <ToolbarButton
          editor={props.editor}
          caret="****"
          offset={2}
          onClick={props.updateEditor}
        >
          <BoldIcon />
        </ToolbarButton>
        <ToolbarButton
          editor={props.editor}
          caret="**"
          offset={1}
          onClick={props.updateEditor}
        >
          <ItalicIcon />
        </ToolbarButton>
      </div>
      <div className="btn-group">
        <ToolbarButton
          editor={props.editor}
          caret="``"
          offset={1}
          onClick={props.updateEditor}
        >
          <CodeIcon />
        </ToolbarButton>
        <ToolbarButton
          editor={props.editor}
          caret="[](url)"
          offset={1}
          onClick={props.updateEditor}
        >
          <LinkIcon />
        </ToolbarButton>
        <ToolbarButton
          editor={props.editor}
          caret="![alt text]()"
          offset={12}
          onClick={props.updateEditor}
        >
          <ImageIcon />
        </ToolbarButton>
      </div>
      <div className="btn-group">
        <ToolbarButton
          editor={props.editor}
          caret="\n - "
          offset={4}
          onClick={props.updateEditor}
        >
          <BulletedListIcon />
        </ToolbarButton>
        <ToolbarButton
          editor={props.editor}
          caret="\n 1. "
          offset={5}
          onClick={props.updateEditor}
        >
          <NumberedListIcon />
        </ToolbarButton>
        <ToolbarButton
          editor={props.editor}
          caret="> "
          offset={2}
          onClick={props.updateEditor}
        >
          <QuoteIcon />
        </ToolbarButton>
      </div>
    </div>
  );
};
