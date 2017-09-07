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

const PADDING_OFFSET = 0;

 // this.setState({
    //   ...this.state,
    //   syncSourceLine: ((this.editor.scrollTop + PADDING_OFFSET) / this.editorLineHeight),
    //   whoIsScrolling: WhoIsScrolling.Editor,
    // });

export class TextEditorComponent extends React.Component<Props, {}> {
  constructor() {
    super();
  }

  private editorRef: HTMLTextAreaElement = null;
  private editorLineHeight: number = 20;
  private allowNotifyScroll: boolean = true;

  private setEditorRef = (input) => { this.editorRef = input; };

  private notifySourceLine = throttle(() => {
    const sourceLine = (this.editorRef.scrollTop + PADDING_OFFSET) / this.editorLineHeight;
    this.props.onScrollSourceLine(sourceLine);
  }, 25);

  private handleScroll = (event) => {
    if (this.allowNotifyScroll) {
      if (this.props.onScrollSourceLine) {
        this.notifySourceLine();
      }
    } else {
      this.allowNotifyScroll = true;
    }
  }

  private handleContentChange = (event) => {
    const value = event.target.value;
    this.props.onContentChange(value);
  }

  private doEditorScrollToSourceLine = (targetSourceLine) => {
    this.allowNotifyScroll = false;
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
        onScroll={this.handleScroll}
        onChange={this.handleContentChange}
      />
    );
  }
};