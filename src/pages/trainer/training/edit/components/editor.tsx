import * as React from 'react';
import {ToolbarComponent} from './toolbar';

interface IProps {
  content: string;
  onContentChange: () => void;
  initializeTextAreaElement: (textArea: HTMLTextAreaElement) => void;
  onToolbarButtonClick: (textArea: HTMLTextAreaElement, caret: string, offset: number) => void;
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
      <div>
        <ToolbarComponent
          textArea={this.textArea}
          updateTextArea={this.props.onToolbarButtonClick}
        />
        <textarea
          onChange={this.props.onContentChange}
          ref={this.refHandlers.textArea}
          value={this.props.content}
        />
      </div>
    );
  }
}
