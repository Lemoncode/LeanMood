import * as React from 'react';
import {ToolbarContainerComponent, IToolbarCommand} from './toolbar';
import {textAreaTool} from '../../../../../common/ui/tools/textAreaTool';
const classNames: any = require('./editorStyles.scss');

interface IProps {
  content: string;
  cursorStartPosition: number;
  shouldUpdateEditorCursor: boolean;
  toolbarCommand: IToolbarCommand;
  className: string;
  onContentChange: (content: string) => void;
  updateEditorCursor: (cursorStartPosition: number) => void;
}

export class EditorComponent extends React.Component<IProps, {}> {
  private editor: HTMLTextAreaElement;
  private refHandlers = {
    textArea: (textArea) => { this.editor = textArea; },
  };

  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.toolbarCommand !== this.props.toolbarCommand) {
      this.updateContentWithToolbarCommand(nextProps.toolbarCommand);
      this.updateEditorCursor(nextProps.toolbarCommand.offset);
    }
  }

  private updateContentWithToolbarCommand(toolbarCommand: IToolbarCommand) {
    const editorContent = textAreaTool.insertAtCaretGetText(this.editor, toolbarCommand.caret, toolbarCommand.offset);
    this.props.onContentChange(editorContent);
  }

  private updateEditorCursor(offset: number) {
    const cursorStartPosition = textAreaTool.calculateStartCursorPositionPlusOffset(this.editor, offset);
    this.props.updateEditorCursor(cursorStartPosition);
  }

  public componentDidUpdate() {
    if (this.props.shouldUpdateEditorCursor) {
      textAreaTool.placeCursor(this.editor, this.props.cursorStartPosition);
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
