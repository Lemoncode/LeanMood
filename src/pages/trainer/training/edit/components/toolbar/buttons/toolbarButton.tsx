import * as React from 'react';

interface IProps {
  textArea: HTMLTextAreaElement;
  caret: string;
  offset: number;
  onClick: (textArea: HTMLTextAreaElement, caret: string, offset: number) => void;
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
    this.props.onClick(this.props.textArea, this.props.caret, this.props.offset);
  }
}
