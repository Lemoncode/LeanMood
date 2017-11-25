import * as React from 'react';
import { Link } from 'react-router';
import { ToolbarComponent } from './toolbar';
import { IMarkdownEntry } from '../../../../../model/trainer/markdownEntry';
import { PanelComponent, PanelItem } from '../../../../../common/components';
import { TextEditorComponent } from '../components/textEditor';
import { MarkDownViewerComponent } from '../../../../../common/components/markdownViewer';
import { panelList } from './panels';
import { SOURCE_LINE_CLASSNAME,
  mapLineToOffset,
  mapOffsetToLine } from '../../../../../common/components/markdownViewer';
import debounce from 'lodash.debounce';

const styles: any = require('./editorStyles.scss');

interface Props {
  content: string;
  cursorStartPosition: number;
  shouldUpdateEditorCursor: boolean;
  className: string;
  showPreview: boolean;
  activePanelId: string;
  onContentChange: (value: string) => void;
  updateEditorCursor: (cursorStartPosition: number) => void;
  togglePreviewMode: () => void;
  setActivePanelId: (panelId: string) => void;
}

// Local state.
interface State {
  mdEntry: IMarkdownEntry;
  editorLineHeight: number;
}

export class EditorComponent extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      mdEntry: {mdCaret: '', caretCursorPosition: 0},
      editorLineHeight: 20,
    };
  }

  private nodeRefPreview: HTMLElement = null;
  private nodeRefEditor: HTMLElement = null;

  private setNodeRefEditor = (ref) => {
    this.nodeRefEditor = ref;
    if (ref) {
      this.nodeRefEditor.onscroll = this.handleScrollEditor;
    }
  }

  private setNodeRefPreview = (ref) => {
    this.nodeRefPreview = ref;
    if (ref) {
      this.nodeRefPreview.onscroll = this.handleScrollPreview;
    }
  }

  private syncScrollEnabled = () => {
    return this.nodeRefEditor && this.nodeRefPreview;
  }

  private handlePanel(panelId) {
    if (panelId !== this.props.activePanelId) {
      this.props.setActivePanelId(panelId);
    } else {
      this.props.setActivePanelId('');
    }
  }

  private insertMarkdownEntry = (markdownEntry: IMarkdownEntry) => {
    if (markdownEntry.panelId && markdownEntry.panelId !== '') {
      this.handlePanel(markdownEntry.panelId);
    } else {
      this.setState({
        ...this.state,
        mdEntry: markdownEntry,
      });
    }
  }

  private mapLineToEditorOffset = (line) => {
    return line * this.state.editorLineHeight;
  }

  private mapEditorOffsetToLine = () => {
    return this.nodeRefEditor.scrollTop / this.state.editorLineHeight;
  }

  private getPreviewPosition = () => {
    const componentPosition = this.nodeRefPreview.getBoundingClientRect().top;
    return componentPosition > 0 ? componentPosition : 0;
  }

  private mapLineToPreviewOffset = (line) => {
    const elements = this.nodeRefPreview.getElementsByClassName(SOURCE_LINE_CLASSNAME);
    return mapLineToOffset(elements, line) - this.getPreviewPosition();
  }

  private mapPreviewOffsetToLine = () => {
    const elements = this.nodeRefPreview.getElementsByClassName(SOURCE_LINE_CLASSNAME);
    return mapOffsetToLine(elements,  this.getPreviewPosition());
  }

  private pauseEditorScrollEvent = debounce(() => {
    this.nodeRefEditor.onscroll = this.nodeRefEditor.onscroll ? null : this.handleScrollEditor;
  }, 250, {leading: true, trailing: true});

  private pausePreviewScrollEvent = debounce(() => {
    this.nodeRefPreview.onscroll = this.nodeRefPreview.onscroll ? null : this.handleScrollPreview;
  }, 250, {leading: true, trailing: true});

  private handleScrollEditor = () => {
    if (!this.syncScrollEnabled()) { return; }
    this.pausePreviewScrollEvent(); this.pausePreviewScrollEvent(); // Call it twice [1]
    window.requestAnimationFrame(() => {
      const line = this.mapEditorOffsetToLine();
      this.nodeRefPreview.scrollTop += this.mapLineToPreviewOffset(line);
    });
  }

  private handleScrollPreview = () => {
    if (!this.syncScrollEnabled()) { return; }
    this.pauseEditorScrollEvent(); this.pauseEditorScrollEvent(); // Call it twice [1]
    window.requestAnimationFrame(() => {
      const line = this.mapPreviewOffsetToLine();
      this.nodeRefEditor.scrollTop = this.mapLineToEditorOffset(line);
    });
  }

  private handleOnLineHeightChange = (lineHeight) => {
    this.setState({
      ...this.state,
      editorLineHeight: lineHeight,
    });
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
            <TextEditorComponent registerRef={this.setNodeRefEditor}
              className={styles.textArea}
              content={this.props.content}
              cursorStartPosition={this.props.cursorStartPosition}
              shouldUpdateEditorCursor={this.props.shouldUpdateEditorCursor}
              onContentChange={this.props.onContentChange}
              updateEditorCursor={this.props.updateEditorCursor}
              onLineHeightChange={this.handleOnLineHeightChange}
              markdownEntry={this.state.mdEntry}
            />
            {
              this.props.showPreview === true ?
                <MarkDownViewerComponent registerRef={this.setNodeRefPreview}
                  className={styles.previewArea}
                  content={this.props.content}
                />
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}

// [1]. This is not the most elegant solution but it is effective. As an alternative
// we can avoid the double call by implementing a custom debounce function with leading
// and trailing edge also for a single call. Lodash does not perform the trailing edge
// when only a single call to the debounced function has been made.
