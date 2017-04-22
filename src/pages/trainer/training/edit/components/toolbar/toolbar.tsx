import * as React from 'react';
import {ToolbarMarkdownButton} from './buttons';
import {Icon, iconEnums} from './icons';
import {IMarkdownEntry} from '../../../../../../model/trainer/markdownEntry';
import {markdownEntryConstants} from '../markdownEntryConstants';
import { FontGroupComponent, LinksGroupComponent, ListGroupComponent } from './groups';
const classNames: any = require('./toolbarStyles.scss');

interface IProps {
  insertMarkdownEntry: (markdownEntry: IMarkdownEntry) => void;
}

export const ToolbarComponent = (props: IProps) => {
  return (
    <div className={`btn btn-default ${classNames.container}`}>      
      <FontGroupComponent insertMarkdownEntry={props.insertMarkdownEntry} />
      <div className={classNames.vertical}>
        <LinksGroupComponent insertMarkdownEntry={props.insertMarkdownEntry} />
        <ListGroupComponent insertMarkdownEntry={props.insertMarkdownEntry} />
      </div>
    </div>
  );
};
