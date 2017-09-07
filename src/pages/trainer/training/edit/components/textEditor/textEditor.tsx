import * as React from 'react';
import { throttle } from '../../../../../../common/helper/limitExecution';
import { textAreaTool } from '../../../../../../common/ui/tools/textAreaTool';
import { IMarkdownEntry } from '../../../../../../model/trainer/markdownEntry';

interface Props {
  content: string;
  cursorStartPosition: number;
  shouldUpdateEditorCursor: boolean;
  onContentChange: (content: string) => void;
  updateEditorCursor: (cursorStartPosition: number) => void;
  markdownEntry?: IMarkdownEntry;
  className?: string;
  scrollSourceLine?: number;
  onScrollSourceLine?: (sourceLine) => any;
}

const PADDING_OFFSET = 50;

 // this.setState({
    //   ...this.state,
    //   syncSourceLine: ((this.editor.scrollTop + PADDING_OFFSET) / this.editorLineHeight),
    //   whoIsScrolling: WhoIsScrolling.Editor,
    // });

export class TextEditorComponent extends React.Component<Props, {}> {
  constructor() {
    super();
  }

  private editorRef: HTMLTextAreaElement;
  private editorLineHeight: number;

  private setEditorRef = (input) => { this.editorRef = input; };

  private handleEditorScroll = throttle((event) => {

  }, 25);

  private handleContentChange = (event) => {
    const value = event.target.value;
    this.props.onContentChange(value);
  }

  private doEditorScrollToSourceLine = (targetSourceLine) => {
    this.editorRef.scrollTop = (targetSourceLine * this.editorLineHeight) + PADDING_OFFSET;
  }

  private updateContentWithMarkdownEntry(markdownEntry: IMarkdownEntry) {
    const editorContent = textAreaTool.insertAtCaretGetText(this.editorRef, markdownEntry.mdCaret,
      markdownEntry.caretCursorPosition);
    this.props.onContentChange(editorContent);
  }

  private updateEditorCursor(caretCursorPosition: number) {
    const cursorStartPosition = textAreaTool.calculateStartCursorPositionPlusOffset(this.editorRef,
      caretCursorPosition);
    this.props.updateEditorCursor(cursorStartPosition);
  }

  public componentDidMount() {
    this.editorLineHeight = parseInt(window.getComputedStyle(this.editorRef, null).getPropertyValue('line-height'), 10);
  }

  public shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.scrollSourceLine !== undefined &&
        nextProps.scrollSourceLine !== this.props.scrollSourceLine) {
      this.doEditorScrollToSourceLine(nextProps.scrollSourceLine);
      return false;
    } else if (nextProps.markdownEntry &&
      nextProps.markdownEntry !== this.props.markdownEntry) {
       this.updateContentWithMarkdownEntry(nextProps.markdownEntry);
       this.updateEditorCursor(nextProps.markdownEntry.caretCursorPosition);
       return false;
    }
    return true;
  }

  public componentDidUpdate() {
    if (this.props.shouldUpdateEditorCursor) {
      textAreaTool.placeCursor(this.editorRef, this.props.cursorStartPosition);
    }
  }

  public render() {
    const { content, className = '', scrollSourceLine, onScrollSourceLine } = this.props;
    return (
      <textarea className={className}
        value={content}
        ref={this.setEditorRef}
        onScroll={this.handleEditorScroll}
        onChange={this.handleContentChange}
      />
    );
  }
};