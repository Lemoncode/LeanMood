import * as React from 'react';
import {ToolbarComponent} from './toolbar';

interface IProps {
  content: string;
  onContentChange: (content: string) => void;
  onToolbarButtonClick: (textArea: HTMLTextAreaElement, caret: string, offset: number) => void;
}

export class EditorComponent extends React.Component<IProps, {}> {
  private textArea: HTMLTextAreaElement;
  private refHandlers = {
    textArea: (textArea) => { this.textArea = textArea; },
  };

  private onContentChange(event) {
    const value = event.target.value;
    this.props.onContentChange(value);
  }

  public render() {
    return (
      <div>
        <ToolbarComponent
          textArea={this.textArea}
          updateTextArea={this.props.onToolbarButtonClick.bind(this)}
        />
        <textarea
          onChange={this.onContentChange.bind(this)}
          ref={this.refHandlers.textArea}
          value={this.props.content}
        />
      </div>
    );
  }
}
