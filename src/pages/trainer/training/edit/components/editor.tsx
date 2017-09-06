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

enum WhoIsScrolling {
  Editor,
  Preview,
  None,
}

const PADDING_OFFSET = 50;

// Local state.
interface State {
  syncSourceLine: number;
  whoIsScrolling: WhoIsScrolling;
}

export class EditorComponent extends React.Component<Props, State> {
  private editor: HTMLTextAreaElement;
  private editorLineHeight: number;

  constructor() {
    super();

    this.insertMarkdownEntry = this.insertMarkdownEntry.bind(this);
    this.onContentChange = this.onContentChange.bind(this);

    this.state = {
      syncSourceLine: 0,
      whoIsScrolling: WhoIsScrolling.None,
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

  private handleEditorScroll = throttle((event) => {
    console.log(`TextArea Scrolling: ${ (this.editor.scrollTop / this.editorLineHeight)}`)
    // this.setState({
    //   ...this.state,
    //   syncSourceLine: ((this.editor.scrollTop + PADDING_OFFSET) / this.editorLineHeight),
    //   whoIsScrolling: WhoIsScrolling.Editor,
    // });
  }, 25);

  private handlePreviewScroll = (sourceLine) => {
    this.setState({
      ...this.state,
      syncSourceLine: sourceLine,
      whoIsScrolling: WhoIsScrolling.Preview,
    });
  }

  private doEditorScrollToSourceLine = (targetSourceLine) => {
      this.editor.scrollTop = (targetSourceLine * this.editorLineHeight) + PADDING_OFFSET;
  }

  public shouldComponentUpdate(nextProps, nextState) {
    if (nextState.syncSourceLine !== undefined &&
        nextState.syncSourceLine !== this.state.syncSourceLine &&
        nextState.whoIsScrolling !== WhoIsScrolling.Editor) {
      this.doEditorScrollToSourceLine(nextState.syncSourceLine);
      return false;
    }
    return true;
  }

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
              onScroll={this.handleEditorScroll}
            />
            {
              this.props.showPreview ?
                <PreviewComponent className={styles.previewArea}
                  content={this.props.content}
                  onScrollSourceLine={this.handlePreviewScroll}
                  scrollSourceLine={/*this.state.whoIsScrolling !== WhoIsScrolling.Preview ?*/
                    this.state.syncSourceLine /*: undefined*/}
                />
                : null
            }
          </div>
        </div>
      </div>
    );
  }
}
