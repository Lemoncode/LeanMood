import * as React from 'react';
import {ToolbarContainerComponent} from './toolbar';
import {textAreaTool} from '../../../../../common/ui/tools/textAreaTool';

interface IProps {
  content: string;
  cursorStartPosition: number;
  shouldSetEditorFocus: boolean;
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

  public componentDidUpdate() {
    if (this.props.shouldSetEditorFocus) {
      textAreaTool.placeCursor(this.textArea, this.props.cursorStartPosition);
    }
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
