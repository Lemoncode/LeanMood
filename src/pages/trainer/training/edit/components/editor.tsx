import * as React from 'react';
import { Link } from 'react-router';
import { ToolbarComponent } from './toolbar';
import { IMarkdownEntry } from '../../../../../model/trainer/markdownEntry';
import { PanelComponent, PanelItem } from '../../../../../common/components';
import { TextEditorComponent } from '../components/textEditor';
import { MarkDownViewerComponent } from '../../../../../common/components/markdownViewer';
import { panelIds, panelList } from './panels';
import { trainerRouteEnums } from '../../../../../common/routeEnums/trainer';
import debounce from 'lodash.debounce';

import { SOURCE_LINE_CLASSNAME,
  calculateOffsetFromLine,
  calculateLineFromOffset } from '../../../../../common/components/markdownViewer';

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

  private setNodeRefPreview = (input) => {
    this.nodeRefPreview = input;
  }

  private setNodeRefEditor = (input) => {
    this.nodeRefEditor = input;
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

  // private handleLineScroll = (whoIsScrolling) => (line) => {
  //   console.log(`Scrolling ${whoIsScrolling} line ${line}`);
  //   this.setState({
  //     ...this.state,
  //     whoIsScrolling,
  //     activeLine: line,
  //   });
  // }

  private convertLineToOffset = (line) => {
    const elements = this.nodeRefPreview.getElementsByClassName(SOURCE_LINE_CLASSNAME);
    const lineOffset = calculateOffsetFromLine(elements, line);
    const componentPosition = this.nodeRefPreview.getBoundingClientRect().top;
    return lineOffset - ((componentPosition > 0) ? componentPosition : 0);
  }

  private convertOffsetToLine = () => {
    const componentPosition = this.nodeRefPreview.getBoundingClientRect().top;
    const elements = this.nodeRefPreview.getElementsByClassName(SOURCE_LINE_CLASSNAME);
    return calculateLineFromOffset(elements, componentPosition > 0 ? componentPosition : 0);
  }

  private debouncedTogglePreviewScroll = debounce(() => {
    this.nodeRefPreview.onscroll = this.nodeRefPreview.onscroll ? null : this.handleScrollPreview;
  }, 250, {'leading': true, 'trailing': true});

  private debouncedToggleEditorScroll = debounce(() => {
    this.nodeRefEditor.onscroll = this.nodeRefEditor.onscroll ? null : this.handleScrollEditor;
  }, 250, {'leading': true, 'trailing': true});

  private handleScrollEditor = () => {
    this.debouncedTogglePreviewScroll();
    window.requestAnimationFrame(() => {
      const line = (this.nodeRefEditor.scrollTop) / this.state.editorLineHeight;
      console.log(`EDITOR scrolling ${line}`);
      this.nodeRefPreview.scrollTop += this.convertLineToOffset(line);
    });
  }

  private handleScrollPreview = () => {
    this.debouncedToggleEditorScroll();
    window.requestAnimationFrame(() => {
      const line = this.convertOffsetToLine();
      console.log(`PREVIEW scrolling ${line}`);
      this.nodeRefEditor.scrollTop = line * this.state.editorLineHeight;
    });
  }

  public componentDidMount() {
    this.nodeRefEditor.onscroll = this.handleScrollEditor;
    this.nodeRefPreview.onscroll = this.handleScrollPreview;
    console.log(this.nodeRefEditor);
    console.log(this.nodeRefPreview);

    // this.setState({
    //   ...this.state,
    //   editorLineHeight: parseInt(window.getComputedStyle(this.nodeRefEditor, null).getPropertyValue('line-height'), 10),
    // });
  }

  public componentWillUnmount() {
    this.nodeRefEditor.onscroll = null;
    this.nodeRefPreview.onscroll = null;
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
              markdownEntry={this.state.mdEntry}
              // onLineScroll={this.handleLineScroll('editor')}
              //scrollToLine={this.state.whoIsScrolling === 'preview' ? this.state.activeLine : null}
            />
            {
              /*this.props.showPreview*/ true ?
                <MarkDownViewerComponent registerRef={this.setNodeRefPreview}
                  className={styles.previewArea}
                  content={this.props.content}
                  //onLineScroll={this.handleLineScroll('preview')}
                  //scrollToLine={this.state.whoIsScrolling === 'editor' ? this.state.activeLine : null}
                />
                : null
            }
          </div>
        </div>
      </div>
    );
  }
}
