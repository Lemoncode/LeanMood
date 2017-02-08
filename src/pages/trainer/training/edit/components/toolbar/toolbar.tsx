import * as React from 'react';
import {ToolbarButton} from './buttons';
import {Icon, iconEnums} from './icons';

interface IProps {
  selectCaretToInsert: (caret: string, offset: number) => void;
}

export const ToolbarComponent = (props: IProps) => {
  return (
    <div className="btn-toolbar">
      <div className="btn-group">
        <ToolbarButton
          caret="# "
          offset={1}
          onClick={props.selectCaretToInsert}
        >
          <Icon icon={iconEnums.header} />
        </ToolbarButton>
        <ToolbarButton
          caret="****"
          offset={2}
          onClick={props.selectCaretToInsert}
        >
          <Icon icon={iconEnums.bold} />
        </ToolbarButton>
        <ToolbarButton
          caret="**"
          offset={1}
          onClick={props.selectCaretToInsert}
        >
          <Icon icon={iconEnums.italic} />
        </ToolbarButton>
      </div>
      <div className="btn-group">
        <ToolbarButton
          caret="``"
          offset={1}
          onClick={props.selectCaretToInsert}
        >
          <Icon icon={iconEnums.code} />
        </ToolbarButton>
        <ToolbarButton
          caret="[](url)"
          offset={1}
          onClick={props.selectCaretToInsert}
        >
          <Icon icon={iconEnums.link} />
        </ToolbarButton>
        <ToolbarButton
          caret="![alt text]()"
          offset={12}
          onClick={props.selectCaretToInsert}
        >
          <Icon icon={iconEnums.image} />
        </ToolbarButton>
      </div>
      <div className="btn-group">
        <ToolbarButton
          caret="\n - "
          offset={4}
          onClick={props.selectCaretToInsert}
        >
          <Icon icon={iconEnums.bulletedList} />
        </ToolbarButton>
        <ToolbarButton
          caret="\n 1. "
          offset={5}
          onClick={props.selectCaretToInsert}
        >
          <Icon icon={iconEnums.numberedList} />
        </ToolbarButton>
        <ToolbarButton
          caret="> "
          offset={2}
          onClick={props.selectCaretToInsert}
        >
          <Icon icon={iconEnums.quote} />
        </ToolbarButton>
      </div>
    </div>
  );
};
