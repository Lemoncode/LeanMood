import * as React from 'react';
import { Link } from 'react-router';
import { ToolbarComponent } from './toolbar';
import { IMarkdownEntry } from '../../../../../model/trainer/markdownEntry';
import { PanelComponent, PanelItem } from '../../../../../common/components';
import { TextEditorComponent } from '../components/textEditor';
import { PreviewComponent } from './preview';
import { panelIds, panelList } from './panels';
import { trainerRouteEnums } from '../../../../../common/routeEnums/trainer';

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

enum WhoIsScrolling {
  Editor,
  Preview,
  None,
}

// Local state.
interface State {
  mdEntry: IMarkdownEntry;
  activeSourceLine: number;
  whoIsScrolling: WhoIsScrolling;
}

export class EditorComponent extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      mdEntry: {mdCaret: '', caretCursorPosition: 0},
      activeSourceLine: 0,
      whoIsScrolling: WhoIsScrolling.None,
    };
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

  private handleEditorScroll = (sourceLine) => {
    this.setState({
      ...this.state,
      activeSourceLine: sourceLine,
      whoIsScrolling: WhoIsScrolling.Editor,
    });
  }

  private handlePreviewScroll = (sourceLine) => {
    this.setState({
      ...this.state,
      activeSourceLine: sourceLine,
      whoIsScrolling: WhoIsScrolling.Preview,
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
            <TextEditorComponent className={styles.textArea}
              content={this.props.content}
              cursorStartPosition={this.props.cursorStartPosition}
              shouldUpdateEditorCursor={this.props.shouldUpdateEditorCursor}
              onContentChange={this.props.onContentChange}
              updateEditorCursor={this.props.updateEditorCursor}
              markdownEntry={this.state.mdEntry}
              onScrollSourceLine={this.handleEditorScroll}
              scrollSourceLine={this.state.whoIsScrolling !== WhoIsScrolling.Editor ?
                this.state.activeSourceLine : undefined}
            />
            {
              this.props.showPreview ?
                <PreviewComponent className={styles.previewArea}
                  content={this.props.content}
                  onScrollSourceLine={this.handlePreviewScroll}
                  scrollSourceLine={this.state.whoIsScrolling !== WhoIsScrolling.Preview ?
                    this.state.activeSourceLine : undefined}
                />
                : null
            }
          </div>
        </div>
      </div>
    );
  }
}
