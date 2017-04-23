import * as React from 'react';
import { ToolbarComponent } from './toolbar';
import { IMarkdownEntry } from '../../../../../model/trainer/markdownEntry';
import { textAreaTool } from '../../../../../common/ui/tools/textAreaTool';
import { PreviewComponent } from './preview'
const classNames: any = require('./editorStyles.scss');

interface Props {
  content: string;
  cursorStartPosition: number;
  shouldUpdateEditorCursor: boolean;
  className: string;
  onContentChange: (content: string) => void;
  updateEditorCursor: (cursorStartPosition: number) => void;
}

interface State {
  showPreview: boolean;
}

export class EditorComponent extends React.Component<Props, State> {
  private editor: HTMLTextAreaElement;

  constructor() {
    super();

    this.insertMarkdownEntry = this.insertMarkdownEntry.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.state = {showPreview : false};
  }

  private refHandlers = {
    textArea: (textArea) => { this.editor = textArea; },
  };

  private insertMarkdownEntry(markdownEntry: IMarkdownEntry) {
    this.updateContentWithMarkdownEntry(markdownEntry);
    this.updateEditorCursor(markdownEntry.caretCursorPosition);
  }

  private updateContentWithMarkdownEntry(markdownEntry: IMarkdownEntry) {
    const editorContent = textAreaTool.insertAtCaretGetText(this.editor, markdownEntry.mdCaret,
      markdownEntry.caretCursorPosition);
    this.props.onContentChange(editorContent);
  }

  private updateEditorCursor(caretCursorPosition: number) {
    const cursorStartPosition = textAreaTool.calculateStartCursorPositionPlusOffset(this.editor, caretCursorPosition);
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
        <ToolbarComponent insertMarkdownEntry={this.insertMarkdownEntry} />
        {
          !this.state.showPreview ?
              <textarea
                className={classNames.textArea}
                onChange={this.onContentChange}
                ref={this.refHandlers.textArea}
                value={this.props.content}
              />
          :
            <PreviewComponent content={this.props.content}/>
        }
      </div>
    );
  }
}
