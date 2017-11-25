import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { textAreaTool } from '../../../../../../common/ui/tools/textAreaTool';
import { IMarkdownEntry } from '../../../../../../model/trainer/markdownEntry';

interface Props {
  content: string;
  cursorStartPosition: number;
  shouldUpdateEditorCursor: boolean;
  onContentChange: (content: string) => void;
  updateEditorCursor: (cursorStartPosition: number) => void;
  onLineHeightChange: (lineHeight: number) => void;
  registerRef?: (ref: HTMLElement) => void;
  markdownEntry?: IMarkdownEntry;
  className?: string;
}

export class TextEditorComponent extends React.Component<Props, {}> {
  constructor() {
    super();
  }

  private nodeRef: HTMLTextAreaElement = null;

  private setNodeRef = (input) => {
    this.nodeRef = input;
    if (this.props.registerRef) {
      this.props.registerRef(this.nodeRef);
    }
  }

  private handleContentChange = (event) => {
    const value = event.target.value;
    this.props.onContentChange(value);
  }

  private updateContentWithMarkdownEntry(markdownEntry: IMarkdownEntry) {
    const editorContent = textAreaTool.insertAtCaretGetText(this.nodeRef, markdownEntry.mdCaret,
      markdownEntry.caretCursorPosition);
    this.props.onContentChange(editorContent);
  }

  private updateEditorCursor(caretCursorPosition: number) {
    const cursorStartPosition = textAreaTool.calculateStartCursorPositionPlusOffset(this.nodeRef,
      caretCursorPosition);
    this.props.updateEditorCursor(cursorStartPosition);
  }

  public componentDidMount() {
    this.props.onLineHeightChange(
      parseInt(window.getComputedStyle(this.nodeRef, null).getPropertyValue('line-height'), 10),
    );
  }

  public shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.markdownEntry && nextProps.markdownEntry !== this.props.markdownEntry) {
       this.updateContentWithMarkdownEntry(nextProps.markdownEntry);
       this.updateEditorCursor(nextProps.markdownEntry.caretCursorPosition);
       return false;
    }
    return true;
  }

  public componentDidUpdate() {
    if (this.props.shouldUpdateEditorCursor) {
      textAreaTool.placeCursor(this.nodeRef, this.props.cursorStartPosition);
    }
  }

  public render() {
    const { content, className = ''} = this.props;
    return (
      <textarea className={className} wrap="off" /** TODO: Add support to word wrap */
        value={content}
        ref={this.setNodeRef}
        onChange={this.handleContentChange}
      />
    );
  }
};
