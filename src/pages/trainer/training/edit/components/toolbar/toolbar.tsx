import * as React from 'react';
import {ToolbarButton} from './buttons';
import {Icon, iconEnums} from './icons';

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
          <Icon icon={iconEnums.header} />
        </ToolbarButton>
        <ToolbarButton
          editor={props.editor}
          caret="****"
          offset={2}
          onClick={props.updateEditor}
        >
          <Icon icon={iconEnums.bold} />
        </ToolbarButton>
        <ToolbarButton
          editor={props.editor}
          caret="**"
          offset={1}
          onClick={props.updateEditor}
        >
          <Icon icon={iconEnums.italic} />
        </ToolbarButton>
      </div>
      <div className="btn-group">
        <ToolbarButton
          editor={props.editor}
          caret="``"
          offset={1}
          onClick={props.updateEditor}
        >
          <Icon icon={iconEnums.code} />
        </ToolbarButton>
        <ToolbarButton
          editor={props.editor}
          caret="[](url)"
          offset={1}
          onClick={props.updateEditor}
        >
          <Icon icon={iconEnums.link} />
        </ToolbarButton>
        <ToolbarButton
          editor={props.editor}
          caret="![alt text]()"
          offset={12}
          onClick={props.updateEditor}
        >
          <Icon icon={iconEnums.image} />
        </ToolbarButton>
      </div>
      <div className="btn-group">
        <ToolbarButton
          editor={props.editor}
          caret="\n - "
          offset={4}
          onClick={props.updateEditor}
        >
          <Icon icon={iconEnums.bulletedList} />
        </ToolbarButton>
        <ToolbarButton
          editor={props.editor}
          caret="\n 1. "
          offset={5}
          onClick={props.updateEditor}
        >
          <Icon icon={iconEnums.numberedList} />
        </ToolbarButton>
        <ToolbarButton
          editor={props.editor}
          caret="> "
          offset={2}
          onClick={props.updateEditor}
        >
          <Icon icon={iconEnums.quote} />
        </ToolbarButton>
      </div>
    </div>
  );
};
