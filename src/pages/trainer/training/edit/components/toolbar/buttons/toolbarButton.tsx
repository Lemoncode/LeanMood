import * as React from 'react';

interface Props {
  textArea: HTMLTextAreaElement;
  caret: string;
  offset: number;
  onClick: (textArea: HTMLTextAreaElement, caret: string, offset: number) => void;
}

export class ToolbarButton extends React.Component<Props, {}> {
  private onClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.textArea, this.props.caret, this.props.offset);
  }

  render() {
    return (
      <button type="button" className="btn btn-default"
       onClick={(e) => this.onClick(e)}>
        {this.props.children}
     </button>
   );
  }
}
