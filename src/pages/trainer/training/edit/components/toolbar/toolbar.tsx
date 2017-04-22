import * as React from 'react';
import {ToolbarMarkdownButton} from './buttons';
import {Icon, iconEnums} from './icons';
import {IMarkdownEntry} from '../../../../../../model/trainer/markdownEntry';
import {markdownEntryConstants} from '../markdownEntryConstants';
import { FontGroupComponent, LinksGroupComponent, ListGroupComponent } from './groups';

interface IProps {
  insertMarkdownEntry: (markdownEntry: IMarkdownEntry) => void;
}

export const ToolbarComponent = (props: IProps) => {
  return (
    <div className="btn-toolbar">
      
      <FontGroupComponent insertMarkdownEntry={props.insertMarkdownEntry} />
      <LinksGroupComponent insertMarkdownEntry={props.insertMarkdownEntry} />
      <ListGroupComponent insertMarkdownEntry={props.insertMarkdownEntry} />
    </div>
  );
};
