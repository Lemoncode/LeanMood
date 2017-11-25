import * as React from 'react';
import { Link } from 'react-router';
import { ToolbarComponent } from './toolbar';
import { IMarkdownEntry } from '../../../../../model/trainer/markdownEntry';
import { PanelComponent, PanelItem } from '../../../../../common/components';
import { TextEditorComponent } from '../components/textEditor';
import { panelList } from './panels';
import {
  MarkDownViewerComponent,
  mapLineToOffset,
  mapOffsetToLine,
} from '../../../../../common/components/markdownViewer';
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

  private nodeRefEditor: HTMLElement = null;
  private nodeRefPreview: HTMLElement = null;

  private setNodeRefEditor = (input) => {
    this.nodeRefEditor = input;
    this.nodeRefEditor.onscroll = this.handleScrollEditor;
  }

  private setNodeRefPreview = (input) => {
    this.nodeRefPreview = input;
    this.nodeRefPreview.onscroll = this.handleScrollPreview;
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

  private convertLineToPreviewOffset = (line) => {
    const offset = mapLineToOffset(line);
    console.log(`-- converted to offset ${offset}`)
    const componentPosition = this.nodeRefPreview.getBoundingClientRect().top;
    return offset - ((componentPosition > 0) ? componentPosition : 0);
  }

  private convertPreviewOffsetToLine = () => {
    const componentPosition = this.nodeRefPreview.getBoundingClientRect().top;
    const line = mapOffsetToLine(componentPosition > 0 ? componentPosition : 0);
    console.log(`-- converted to line ${line}`)
    return line;
  }

  private pauseEditorScrollEvent = debounce(() => {
    this.nodeRefEditor.onscroll = this.nodeRefEditor.onscroll ? null : this.handleScrollEditor;
  }, 250, {leading: true, trailing: true});

  private pausePreviewScrollEvent = debounce(() => {
    this.nodeRefPreview.onscroll = this.nodeRefPreview.onscroll ? null : this.handleScrollPreview;
  }, 250, {leading: true, trailing: true});

  private handleScrollEditor = () => {
    if (!this.syncScrollEnabled()) { return; }
    window.requestAnimationFrame(() => {
      this.pausePreviewScrollEvent();
      const line = (this.nodeRefEditor.scrollTop) / this.state.editorLineHeight;
      console.log(`EDITOR scrolling line ${line}`);
      this.nodeRefPreview.scrollTop = this.convertLineToPreviewOffset(line);
    });
  }

  private handleScrollPreview = () => {
    if (!this.syncScrollEnabled()) { return; }
    window.requestAnimationFrame(() => {
      this.pauseEditorScrollEvent();
      const line = this.convertPreviewOffsetToLine();
      console.log(`PREVIEW scrolling line ${line}`);
      this.nodeRefEditor.scrollTop = line * this.state.editorLineHeight;
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
