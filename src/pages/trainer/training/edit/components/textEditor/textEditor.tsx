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
  markdownEntry?: IMarkdownEntry;
  className?: string;
  scrollToLine?: number;
  onLineScroll?: (line) => any;
  registerRef: (ref) => void;
}

interface State {
  editorLineHeight: number;
}

export class TextEditorComponent extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      editorLineHeight: 20,
    };
  }

  private nodeRef: HTMLTextAreaElement = null;

  private setNodeRef = (input) => {
    this.nodeRef = input;
  }

  private handleScroll = (event) => {
    // if (this.props.onLineScroll) {
    //   console.log(" NOTIFY |       ");
    //   window.requestAnimationFrame(() => {
    //     const line = (this.nodeRef.scrollTop) / this.state.editorLineHeight;
    //     this.props.onLineScroll(line);
    //   });
    // }
  }

  private handleContentChange = (event) => {
    const value = event.target.value;
    this.props.onContentChange(value);
  }

  private doEditorScrollToSourceLine = (targetLine) => {
    // this.nodeRef.scroll = null;
    // this.nodeRef.scrollTop = targetLine * this.state.editorLineHeight;
    // window.requestAnimationFrame(() => {
    //   this.nodeRef.onscroll = this.handleScroll;
    // });
  }

  private updateContentWithMarkdownEntry(markdownEntry: IMarkdownEntry) {
    // const editorContent = textAreaTool.insertAtCaretGetText(this.nodeRef, markdownEntry.mdCaret,
    //   markdownEntry.caretCursorPosition);
    // this.props.onContentChange(editorContent);
  }

  private updateEditorCursor(caretCursorPosition: number) {
    // const cursorStartPosition = textAreaTool.calculateStartCursorPositionPlusOffset(this.nodeRef,
    //   caretCursorPosition);
    // this.props.updateEditorCursor(cursorStartPosition);
  }

  public componentDidMount() {
    this.props.registerRef(this.nodeRef)
    // this.nodeRef.onscroll = this.handleScroll;
    // this.setState({
    //   ...this.state,
    //   editorLineHeight: parseInt(window.getComputedStyle(this.nodeRef, null).getPropertyValue('line-height'), 10),
    // });
  }

  public shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.scrollToLine && nextProps.scrollToLine !== this.props.scrollToLine) {
      // this.doEditorScrollToSourceLine(nextProps.scrollToLine);
      // return false;
    } else if (nextProps.markdownEntry &&
      nextProps.markdownEntry !== this.props.markdownEntry) {
       this.updateContentWithMarkdownEntry(nextProps.markdownEntry);
       this.updateEditorCursor(nextProps.markdownEntry.caretCursorPosition);
       return false;
    }
    return true;
  }

  // public componentDidUpdate() {
  //   if (this.props.shouldUpdateEditorCursor) {
  //     textAreaTool.placeCursor(this.nodeRef, this.props.cursorStartPosition);
  //   }
  // }

  // public componentWillUnmount() {
  //   this.nodeRef.onscroll = null;
  // }

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
