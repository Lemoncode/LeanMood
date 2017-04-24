import * as React from 'react';
import { IMarkdownEntry } from '../../../../../../../model/trainer/markdownEntry';
import { ToolbarMarkdownButton } from './toolbarMarkdownButton';

interface IProps {
  mdCaret: string;
  caretCursorPosition: number;
  paneldId?: string;
  onClick: (markdownEntry: IMarkdownEntry) => void;
  label: string;
}

// TODO: This component could make use of toolbarLabeledButton
export class ToolbarLabeledMarkdownButton extends React.Component<IProps, {}> {

  constructor() {
    super();
  }

  public render() {
    return (
      <div>
        <ToolbarMarkdownButton
            mdCaret={this.props.mdCaret}
            caretCursorPosition={this.props.caretCursorPosition}
            panelId={this.props.paneldId}
            onClick={this.props.onClick}
        >
          {this.props.children}
        </ToolbarMarkdownButton>
        <span>{this.props.label}</span>
      </div>
    );
  }
}
