import { connect } from 'react-redux';
import { IAppState } from '../../../../../reducers';
import { EditorComponent } from './editor';
import { trainingContentChangedAction } from '../actions/trainingContentChanged';
import { toggleEditorPreviewAction } from '../actions/toggleEditorPreview';
import { updateEditorCursorAction} from '../actions/updateEditorCursor';
import { setActivePanelAction } from '../actions/setActivePanel';

const mapStateToProps = (state: IAppState, ownProps) => ({
  content: state.trainer.training.content,
  cursorStartPosition: state.trainer.training.cursorStartPosition,
  shouldUpdateEditorCursor: state.trainer.training.shouldUpdateEditorCursor,
  showPreview: state.trainer.training.showPreview,
  className: ownProps.className,
  activePanelId: state.trainer.training.activePanelId,
});

const mapDispatchToProps = (dispatch) => ({
  onContentChange: (content: string) => dispatch(trainingContentChangedAction(content)),
  updateEditorCursor: (cursorStartPosition: number) =>
    dispatch(updateEditorCursorAction(cursorStartPosition)),
  togglePreviewMode : () => dispatch(toggleEditorPreviewAction()),
  setActivePanelId: (panelId) => dispatch(setActivePanelAction(panelId)),
});

export const EditorContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorComponent);
