import * as React from 'react';
import { Link } from 'react-router';
import { ToolbarComponent } from './toolbar';
import { IMarkdownEntry } from '../../../../../model/trainer/markdownEntry';
import { textAreaTool } from '../../../../../common/ui/tools/textAreaTool';
import { PanelComponent, PanelItem } from '../../../../../common/components';
import { PreviewComponent } from './preview';
import { panelIds, panelList } from './panels';
import { trainerRouteEnums } from '../../../../../common/routeEnums/trainer';
import { throttle } from '../../../../../common/helper/limitExecution';
const styles: any = require('./editorStyles.scss');

interface Props {
  content: string;
  cursorStartPosition: number;
  shouldUpdateEditorCursor: boolean;
  className: string;
  showPreview: boolean;
  activePanelId: string;
  onContentChange: (content: string) => void;
  updateEditorCursor: (cursorStartPosition: number) => void;
  togglePreviewMode: () => void;
  setActivePanelId: (panelId: string) => void;
}

interface State {
  activeLine: number;
}

export class EditorComponent extends React.Component<Props, State> {
  private editor: HTMLTextAreaElement;
  private editorLineHeight: number;

  constructor() {
    super();

    this.insertMarkdownEntry = this.insertMarkdownEntry.bind(this);
    this.onContentChange = this.onContentChange.bind(this);

    this.state = {
      activeLine: 0,
    };
  }

  private refHandlers = {
    textArea: (textArea) => { this.editor = textArea; },
  };

  private handlePanel(panelId) {
    if (panelId !== this.props.activePanelId) {
      this.props.setActivePanelId(panelId);
    } else {
      this.props.setActivePanelId('');
    }
  }

  private insertMarkdownEntry(markdownEntry: IMarkdownEntry) {
    if (markdownEntry.panelId && markdownEntry.panelId !== '') {
      this.handlePanel(markdownEntry.panelId);
    } else {
      this.updateContentWithMarkdownEntry(markdownEntry);
      this.updateEditorCursor(markdownEntry.caretCursorPosition);
    }
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

  private onContentChange(event) {
    const value = event.target.value;
    this.props.onContentChange(value);
  }

  private handleTextAreaScroll = throttle(() => {
    this.setState({
      ...this.state,
      activeLine: (this.editor.scrollTop / this.editorLineHeight),
    });
  }, 50);

  public componentDidUpdate() {
    if (this.props.shouldUpdateEditorCursor) {
      textAreaTool.placeCursor(this.editor, this.props.cursorStartPosition);
    }
  }

  public componentDidMount() {
    this.editorLineHeight = parseInt(window.getComputedStyle(this.editor, null).getPropertyValue('line-height'), 10);
  }

  public render() {
    return (
      <div className={this.props.className}>
        <ToolbarComponent
          insertMarkdownEntry={this.insertMarkdownEntry}
          togglePreviewMode={this.props.togglePreviewMode}
        />
        <div className={styles.editorContainer}>
          <PanelComponent activePanelId={this.props.activePanelId} panelList={panelList} />
          <div className={styles.markdownArea}>
            <textarea
              className={styles.textArea}
              ref={this.refHandlers.textArea}
              value={this.props.content}
              onChange={this.onContentChange}
              onScroll={this.handleTextAreaScroll}
            />
            {
              this.props.showPreview ?
                <PreviewComponent className={styles.previewArea}
                  content={this.props.content}
                  onScrollSourceLine={null}
                  scrollSourceLine={this.state.activeLine}
                />
                : null
            }
          </div>
        </div>
      </div>
    );
  }
}
