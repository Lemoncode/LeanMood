import * as React from 'react';

interface Props {
  content: string;
  onContentChange: () => void;
  initializeTextAreaElement: (textarea: HTMLTextAreaElement) => void;
}

export class EditorComponent extends React.Component<Props, {}> {
  textArea: HTMLTextAreaElement;

  componentDidMount() {
    this.props.initializeTextAreaElement(this.textArea);
  }

  render() {
    return (
      <textarea
        onChange={this.props.onContentChange}
        ref={(textArea) => {this.textArea = textArea}}
        value={this.props.content}>
      </textarea>
    );
  }
}
