import * as React from 'react';

interface IProps {
  content: string;
  onContentChange: () => void;
  initializeTextAreaElement: (textarea: HTMLTextAreaElement) => void;
}

export class EditorComponent extends React.Component<IProps, {}> {
  private textArea: HTMLTextAreaElement;
  private refHandlers = {
    textArea: (textArea) => { this.textArea = textArea; },
  };

  public componentDidMount() {
    this.props.initializeTextAreaElement(this.textArea);
  }

  public render() {
    return (
      <textarea
        onChange={this.props.onContentChange}
        ref={this.refHandlers.textArea}
        value={this.props.content}
      />
    );
  }
}
