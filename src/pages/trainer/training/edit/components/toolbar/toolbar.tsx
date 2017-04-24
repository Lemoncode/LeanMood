import * as React from 'react';
import {Icon, iconEnums} from './icons';
import {IMarkdownEntry} from '../../../../../../model/trainer/markdownEntry';
import {markdownEntryConstants} from '../markdownEntryConstants';
import { FontGroupComponent, LinksGroupComponent, ListGroupComponent, CommandGroupComponent } from './groups';
const classNames: any = require('./toolbarStyles.scss');

interface IProps {
  insertMarkdownEntry: (markdownEntry: IMarkdownEntry) => void;
  togglePreviewMode: () => void;
}

export const ToolbarComponent = (props: IProps) => {
  return (
    <div className={`well ${classNames.container}`}>      
      <FontGroupComponent insertMarkdownEntry={props.insertMarkdownEntry} />
      <div className={`${classNames.itemLinks}  ${classNames.vertical}`}>
        <LinksGroupComponent insertMarkdownEntry={props.insertMarkdownEntry} />
        <ListGroupComponent insertMarkdownEntry={props.insertMarkdownEntry} />
      </div>
      <CommandGroupComponent
        insertMarkdownEntry={props.insertMarkdownEntry}
        togglePreviewMode={props.togglePreviewMode}
      />
    </div>
  );
};
