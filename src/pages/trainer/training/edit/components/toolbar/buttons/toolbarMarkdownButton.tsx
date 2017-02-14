import * as React from 'react';
import {IMarkdownEntry} from '../../../../../../../model/trainer/markdownEntry';

interface IProps {
  mdCaret: string;
  caretCursorPosition: number;
  onClick: (markdownEntry: IMarkdownEntry) => void;
}

export class ToolbarMarkdownButton extends React.Component<IProps, {}> {
  private onClick(event) {
    event.preventDefault();
    this.props.onClick({mdCaret: this.props.mdCaret, caretCursorPosition: this.props.caretCursorPosition});
  }

  public render() {
    return (
      <button
        type="button"
        className="btn btn-default"
        onClick={this.onClick.bind(this)}
      >
        {this.props.children}
      </button>
   );
  }
}
