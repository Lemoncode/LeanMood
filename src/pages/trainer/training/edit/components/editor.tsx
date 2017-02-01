import * as React from 'react';
import {ToolbarContainerComponent} from './toolbar';

interface IProps {
  content: string;
  onContentChange: (content: string) => void;
  initializeTextAreaElement: (textArea: HTMLTextAreaElement) => void;
}

export class EditorComponent extends React.Component<IProps, {}> {
  private textArea: HTMLTextAreaElement;
  private refHandlers = {
    textArea: (textArea) => { this.textArea = textArea; },
  };

  public componentDidMount() {
    this.props.initializeTextAreaElement(this.textArea);
  }

  private onContentChange(event) {
    const value = event.target.value;
    this.props.onContentChange(value);
  }

  public render() {
    return (
      <div>
        <ToolbarContainerComponent />
        <textarea
          onChange={this.onContentChange.bind(this)}
          ref={this.refHandlers.textArea}
          value={this.props.content}
        />
      </div>
    );
  }
}
