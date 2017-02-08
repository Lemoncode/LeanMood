import * as React from 'react';
import {ToolbarContainerComponent} from './toolbar';
import {textAreaTool} from '../../../../../common/ui/tools/textAreaTool';
const classNames: any = require('./editorStyles.scss');

interface IProps {
  content: string;
  caret: string;
  offset: number;
  shouldSetEditorFocus: boolean;
  className: string;
  onContentChange: (content: string) => void;
  updateEditorCursor: (editor: HTMLTextAreaElement, cursorStartPosition: number) => void;
}

export class EditorComponent extends React.Component<IProps, {}> {
  private editor: HTMLTextAreaElement;
  private refHandlers = {
    textArea: (textArea) => { this.editor = textArea; },
  };

  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.caret !== this.props.caret && nextProps.offset !== this.props.offset) {
      const editorConent = textAreaTool.insertAtCaretGetText(this.editor, nextProps.caret, nextProps.offset);
      this.props.onContentChange(editorConent);
    }
  }

  // public componentDidUpdate() {
  //   if (this.props.shouldSetEditorFocus) {
  //     const cursorStartPosition = textAreaTool.calculateStartCursorPositionPlusOffset(this.editor, nextProps.offset);
  //     textAreaTool.placeCursor(this.editor, cursorStartPosition);
  //     this.props.updateEditorCursor(this.editor, this.props.cursorStartPosition);
  //   }
  // }

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
