import * as React from 'react';
import { IMarkdownEntry } from '../../../../../../../model/trainer/markdownEntry';
import { ToolbarButton } from './toolbarButton';
const classNames: any = require('./buttonStyles.scss');

interface IProps {
  onClick: () => void;
  label: string;
}

export class ToolbarLabeledButton extends React.Component<IProps, {}> {

  constructor() {
    super();

  }

  public render() {
    return (
      <div className={classNames.column}>
        <ToolbarButton
            onClick={this.props.onClick}
        >
          {this.props.children}
        </ToolbarButton>
        <div className={classNames.labelWrapper}>
          <span>{this.props.label}</span>
        </div>
      </div>
    );
  }
}
