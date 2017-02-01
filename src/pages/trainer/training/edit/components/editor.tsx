import * as React from 'react';
import {ToolbarContainerComponent} from './toolbar';
const classNames: any = require('./editorStyles.scss');

interface IProps {
  content: string;
  cursorStartPosition: number;
  shouldSetEditorFocus: boolean;
  className: string;
  onContentChange: (content: string) => void;
  initializeEditor: (editor: HTMLTextAreaElement) => void;
  updateEditorCursor: (editor: HTMLTextAreaElement, cursorStartPosition: number) => void;
}

export class EditorComponent extends React.Component<IProps, {}> {
  private editor: HTMLTextAreaElement;
  private refHandlers = {
    textArea: (textArea) => { this.editor = textArea; },
  };

  public componentDidMount() {
    this.props.initializeEditor(this.editor);
  }

  public componentDidUpdate() {
    if (this.props.shouldSetEditorFocus) {
      this.props.updateEditorCursor(this.editor, this.props.cursorStartPosition);
    }
  }

  private onContentChange(event) {
    const value = event.target.value;
    this.props.onContentChange(value);
  }

  public render() {
    return (
      <div className={this.props.className}>
        <ToolbarContainerComponent />
        <textarea
          className={classNames.textArea}
          onChange={this.onContentChange.bind(this)}
          ref={this.refHandlers.textArea}
          value={this.props.content}
        />
      </div>
    );
  }
}
