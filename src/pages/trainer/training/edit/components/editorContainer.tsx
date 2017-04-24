import {connect} from 'react-redux';
import {IAppState} from '../../../../../reducers';
import {EditorComponent} from './editor';
import {trainingContentChangedAction} from '../actions/trainingContentChanged';
import { toggleEditorPreviewAction } from '../actions/toggleEditorPreview';
import {updateEditorCursorAction} from '../actions/updateEditorCursor';

const mapStateToProps = (state: IAppState, ownProps) => ({
  content: state.trainer.training.content,
  cursorStartPosition: state.trainer.training.cursorStartPosition,
  shouldUpdateEditorCursor: state.trainer.training.shouldUpdateEditorCursor,
  showPreview: state.trainer.training.showPreview,
  className: ownProps.className,
});

const mapDispatchToProps = (dispatch) => ({
  onContentChange: (content: string) => dispatch(trainingContentChangedAction(content)),
  updateEditorCursor: (cursorStartPosition: number) =>
    dispatch(updateEditorCursorAction(cursorStartPosition)),
  togglePreviewMode : () => dispatch(toggleEditorPreviewAction()),
});

export const EditorContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorComponent);
