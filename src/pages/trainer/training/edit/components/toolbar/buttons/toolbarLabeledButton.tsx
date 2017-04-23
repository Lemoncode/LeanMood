import * as React from 'react';
import { IMarkdownEntry } from '../../../../../../../model/trainer/markdownEntry';
import { ToolbarButton } from './toolbarButton';

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
      <div>
        <ToolbarButton
            onClick={this.props.onClick}
        >
          {this.props.children}
        </ToolbarButton>
        <span>{this.props.label}</span>
      </div>
    );
  }
}
