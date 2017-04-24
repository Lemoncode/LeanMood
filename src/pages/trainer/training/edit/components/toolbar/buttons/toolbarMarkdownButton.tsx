import * as React from 'react';
import { IMarkdownEntry } from '../../../../../../../model/trainer/markdownEntry';
const classNames: any = require('./buttonStyles.scss');

interface IProps {
  mdCaret: string;
  caretCursorPosition: number;
  panelId?: string;
  onClick: (markdownEntry: IMarkdownEntry) => void;
}

// TODO: This component could use toolbarButton
export class ToolbarMarkdownButton extends React.Component<IProps, {}> {

  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }
  private onClick(event) {
    event.preventDefault();
    this.props.onClick({ mdCaret: this.props.mdCaret,
                            caretCursorPosition: this.props.caretCursorPosition,
                            panelId: this.props.panelId,
                        });
  }

  public render() {
    return (
      <button
        type="button"
        className={`btn btn-default ${classNames.commandButton}`}
        onClick={this.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
