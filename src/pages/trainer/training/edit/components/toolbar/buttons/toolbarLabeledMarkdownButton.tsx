import * as React from 'react';
import { IMarkdownEntry } from '../../../../../../../model/trainer/markdownEntry';
import { ToolbarMarkdownButton } from './toolbarMarkdownButton';
const classNames: any = require('./buttonStyles.scss');

interface IProps {
  mdCaret: string;
  caretCursorPosition: number;
  onClick: (markdownEntry: IMarkdownEntry) => void;
  label: string;
}

export class ToolbarLabeledMarkdownButton extends React.Component<IProps, {}> {

  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }
  private onClick(event) {
    event.preventDefault();
    this.props.onClick({ mdCaret: this.props.mdCaret, caretCursorPosition: this.props.caretCursorPosition });
  }

  public render() {
    return (
      <div className={classNames.column}>
        <ToolbarMarkdownButton
            mdCaret={this.props.mdCaret}
            caretCursorPosition={this.props.caretCursorPosition}
            onClick={this.onClick}
        >
          {this.props.children}
        </ToolbarMarkdownButton>
        <div className={classNames.labelWrapper}>
          <span className={classNames.commandLabel}>{this.props.label}</span>
        </div>
      </div>
    );
  }
}
