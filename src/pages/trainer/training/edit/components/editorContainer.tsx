import {connect} from 'react-redux';
import {IAppState} from '../../../../../reducers';
import {EditorComponent} from './editor';
import {trainingContentChangedAction} from '../actions/trainingContentChanged';
import {updateEditorCursorAction} from '../actions/updateEditorCursor';

const mapStateToProps = (state: IAppState, ownProps) => ({
  content: state.trainer.training.content,
  cursorStartPosition: state.trainer.training.cursorStartPosition,
  shouldUpdateEditorCursor: state.trainer.training.shouldUpdateEditorCursor,
  toolbarCommand: state.trainer.training.toolbarCommand,
  className: ownProps.className,
});

const mapDispatchToProps = (dispatch) => ({
  onContentChange: (content: string) => dispatch(trainingContentChangedAction(content)),
  updateEditorCursor: (cursorStartPosition: number) =>
    dispatch(updateEditorCursorAction(cursorStartPosition)),
});

export const EditorContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorComponent);
