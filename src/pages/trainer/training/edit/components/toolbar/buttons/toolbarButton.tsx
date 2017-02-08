import * as React from 'react';
import {IToolbarCommand} from '../toolbarCommand';

interface IProps {
  caret: string;
  offset: number;
  onClick: (toolbarCommand: IToolbarCommand) => void;
}

export class ToolbarButton extends React.Component<IProps, {}> {
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

  private onClick(event) {
    event.preventDefault();
    this.props.onClick({caret: this.props.caret, offset: this.props.offset});
  }
}
